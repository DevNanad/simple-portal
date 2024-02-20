import { usersStore } from '../../store/store'
import Qr from '../../components/Qr'

export default function User() {
  const {userId} = usersStore((state) => state)

  return (
    <div className='px-32 py-10 w-screen h-screen'>
      <h2 className='text-2xl font-semibold text-center'>Welcome</h2>
      <div className="flex justify-center py-20">
        <Qr value={String(userId)} />
      </div>
    </div>
  )
}
