import TransactionsTable from '@/components/TransactionsTable';
import HeaderBox from '@/components/ui/HeaderBox'
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { formatAmount } from '@/lib/utils';
import React from 'react'

const TransactionHistory = async ({ searchParams}: SearchParamProps) => {
  
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

  return (
    <div className='transactions'>
      <div className='transactions-header'>
        <HeaderBox 
          title='Transaction History'
          subtext='See the transaction details'
        />
      </div>

      <div className='space-y-6'>
        <div className='transactions-account'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-16 font-bold text-white'>{account?.data.name}</h2>
            <p className='text-15 text-blue-25'>
              {account?.data.officialName}
            </p>
            <p className='text-14 tracking-[1.1px] text-white'>
                    **** **** **** <span className='text-16'>{account?.data.mask}</span>
            </p>
          </div>
            <div className='transactions-account-balance'>
              <p className='text-15'>Current Balance</p>
              <p className='text-25 text-center font-bold'>{formatAmount(account?.data.currentBalance)}</p>
            </div>
        </div>

        <section className='flex w-full flex-col gap-6'>
          <TransactionsTable 
            transactions={account?.transactions}
          />
        </section>
      </div>

    </div>
  )
}

export default TransactionHistory