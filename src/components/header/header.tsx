import { useHistory } from "react-router-dom";

// Icons
import { ReactComponent as ArrowLeftIcon } from "../../assets/icons/arrow-icon-left.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close-icon.svg";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";

// Style
import {
  ArrowLeftIconWrapper,
  CloseIconWrapper,
  LogoWrraper,
  PageHeader,
  PageToolbar,
} from "./header.style";

interface HeaderProps {
  showLeftIcon: boolean;
}

const Header: React.FC<HeaderProps> = ({ showLeftIcon }: HeaderProps) => {
  let history = useHistory();

  return (
    <PageHeader>
      <PageToolbar>
        {showLeftIcon && (
          <ArrowLeftIconWrapper onClick={() => history.go(-1)}>
            <ArrowLeftIcon />
          </ArrowLeftIconWrapper>
        )}
        <LogoWrraper>
          <LogoIcon />
        </LogoWrraper>
        <CloseIconWrapper onClick={() => history.go(-1)}>
          <CloseIcon />
        </CloseIconWrapper>
      </PageToolbar>
    </PageHeader>
  );
};

export default Header;
