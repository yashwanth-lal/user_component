import React from 'react'
import WatchListItem from '../../molecules/WatchListItem';
import Footer from "../../organisms/Footer";
import Header from "../../organisms/Header";
import WalletList from '../../organisms/WalletList';

const WalletPage = () => {
  return (
    <div>
      <Header />
        <WatchListItem />
        {/* tabs */}
        <WalletList walletList={[]} />
      <Footer />
    </div>
  );
}

export default WalletPage