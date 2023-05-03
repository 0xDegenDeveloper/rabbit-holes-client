import Navbar from "./Navbar";
import LoginButton from "./LoginButton";
import Logo from "./Logo";
import Footer from "./Footer";
import { useState } from "react";

export default function TopComponents(props) {
  const [walletShowing, setWalletShowing] = useState(false);

  return (
    <>
      {/* <LoginBtn>0x1234...abcd</LoginBtn> */}
      <LoginButton
        mobile={props.mobile}
        walletShowing={walletShowing}
        setWalletShowing={setWalletShowing}
      />
      <Navbar totalDigs={props.totalDigs} />
      <Logo
        mobile={props.mobile}
        walletShowing={walletShowing}
        setWalletShowing={setWalletShowing}
      />
      <Footer />
    </>
  );
}
