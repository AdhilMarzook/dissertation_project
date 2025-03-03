import React from 'react'
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';
const Home = () => {
    const loggedIn = { firstName: 'Adhil', lastName: 'Marzook', email: 'adhilmarzook20@gmail.com'};

    return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                    type="greeting"
                    title="Welcome"
                    user={loggedIn.firstName || 'Guest'}
                    subtext="Access and manage the account and transactions"
                />

                <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.25}
                    
                />
            </header>

            RECENT TRANSACTIONS
        </div>
        <RightSidebar 
            user={loggedIn}
            transactions={[]}
            banks={[{ currentBalance: 953.20},{currentBalance: 2100.00}]}
        />
        {/*time 1.17.01*/}
    </section>
  )
}

export default Home