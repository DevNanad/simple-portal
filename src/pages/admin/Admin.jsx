import Button from '../../components/Button'
import {QrScanner} from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import { useScanUserQr } from '../../services/requests/admin/scanner/useScanner';

export default function Admin() {
  const [isScannerOpen, setIsScannerOpen] = useState(false)
  const [gettedUser, setGettedUser] = useState(null)

  const {mutate: scanUserInfo, isLoading: isScanningUser} = useScanUserQr()

  function handleScanWebCam(result) {
    if(result){
      setIsScannerOpen(false)
      console.log(result);
      //get user data from api
      if(isScanningUser == false){
        scanUserInfo({id: result}, {
          onSuccess: (data) => {
            setGettedUser(data)
          },
          onError: (err) => {
            console.log(err);
          }
        })
      }
    }
  }

  function handleOpenScanner(){
    setGettedUser(null)
    setIsScannerOpen(!isScannerOpen)
  }
  
  return (
    <div className='px-32 py-10 w-screen h-screen'>
      <h2 className='text-2xl font-semibold text-center'>Welcome Admin</h2>
      <div className="pb-10 grid grid-cols-4 place-items-end">
        <Button type='button' onClick={handleOpenScanner} buttonName={isScannerOpen ? "Close Scanner" : "Scan user QR"} />
      </div>
      <div className="scanner-container w-full flex justify-center">
        {isScannerOpen ? (
          <div className="scanner overflow-hidden rounded-lg w-96 h-96">
            <QrScanner
            onDecode={(result) => handleScanWebCam(result)}
            onError={(error) => console.log(error?.message)}
            />
          </div>
        ) : ""}
      </div>

      {gettedUser !== null && !isScannerOpen ? (
        <div className="user-info mt-20 text-lg font-semibold p-5 bg-blue-100/50 rounded-xl border-2">
          <h2 className="text-xl text-center font-bold">Scanned user Information</h2>
          <p><span className="opacity-70">Fullname:</span> {gettedUser?.data?.fullname}</p>
          <p><span className="opacity-70">Username:</span> {gettedUser?.data?.username}</p>
        </div>
      ) : ""}
    </div>
  )
}
