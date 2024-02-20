import { scanUserInformation } from "../../../api/admin/scanner/scanner";
import { useMutation } from "react-query";

export const useScanUserQr = () => {
    return useMutation({
      mutationFn: scanUserInformation,
    });
};