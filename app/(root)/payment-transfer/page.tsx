import PaymentTransferForm from '@/components/PaymentTransferForm'
import HeaderBox from '@/components/ui/HeaderBox'
import { getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Transfer = async() => {

      const loggedIn =await getLoggedInUser();
      const accounts = await getAccounts({ userId: loggedIn.$id})
  
      if(!accounts) return;
  
      const accountsData = accounts?.data;
  return (
    <section>
      <HeaderBox 
        title='P2P Payment Transfer'
        subtext='Fill the details for payment transfer'
      />
      <section className='size-full pt-5'>
        <PaymentTransferForm 
          accounts={accountsData}
        />
      </section>
    </section>
  )
}

export default Transfer