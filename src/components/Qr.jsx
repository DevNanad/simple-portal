import QRCode from "react-qr-code";

export default function Qr({value}) {
  return (
    <QRCode
        size={300}
        value={value}
        viewBox={`0 0 256 256`}
    />
  )
}
