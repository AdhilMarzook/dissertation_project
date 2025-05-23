import React from 'react'
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import RecentTransactions from '@/components/RecentTransactions';

const Home = async ({ searchParams }: SearchParamProps) => {
    const params = await searchParams;
    const id = params.id;
    const page = params.page;
    const currentPage = Number(page as string) || 1;
    const loggedIn =await getLoggedInUser();
    const accounts = await getAccounts({ userId: loggedIn.$id})

    if(!accounts) return;

    const accountsData = accounts?.data;
    const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;
    

    const account = await getAccount({ appwriteItemId})

    // //details of the account shown in terminal
    // console.log({
    //     accountsData,
    //     account
    // })

    return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext="Access and manage the account and transactions"
                />

                <TotalBalanceBox
                    accounts={[accountsData]}
                    totalBanks={accounts?.totalBanks}
                    totalCurrentBalance={accounts?.totalCurrentBalance}
                    
                />
            </header>

            <RecentTransactions 
                accounts={accountsData}
                transactions={account?.transactions}
                appwriteItemId={appwriteItemId}
                page={currentPage}
            />
            {/*4.52.35*/}
        </div>
        <RightSidebar 
            user={loggedIn}
            transactions={account?.transactions}
            banks={accountsData?.slice(0, 2)}
        />
    </section>
  )
}

export default Home
