import ReactDOM from "react-dom";
import { FC, ReactNode, useContext } from "react";
import useMounted from "../../hooks/useMounted";

interface IPortalProps {
  children: ReactNode;
  id?: string;
}
// @ts-ignore
const Portal: FC<IPortalProps> = ({ id = "portal-root", children }) => {
  const { mounted } = useMounted();

  const mount =
    typeof document !== "undefined" &&
    typeof id !== "undefined" &&
    document.getElementById(id);
  if (mounted) {
    if (mount) return ReactDOM.createPortal(children, mount);
  }
  return null;
};

export default Portal;
