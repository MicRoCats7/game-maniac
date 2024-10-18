'use client'

import DetailPaymentSucces from '@/components/DetailPaymentSucces';
import useStore from '@/zustand/useGameStore';
import React, { useEffect } from 'react';

function PaymentSuccess() {
    const { setSelectedItem, setUserId, setZoneId, setWhatsapp, setActiveSubMethod, setServiceFee } = useStore();

    useEffect(() => {
        const paymentData = JSON.parse(localStorage.getItem('paymentData'));

        if (paymentData) {
            setSelectedItem(paymentData.selectedItem);
            setUserId(paymentData.userId);
            setZoneId(paymentData.zoneId);
            setWhatsapp(paymentData.whatsapp);
            setActiveSubMethod(paymentData.activeSubMethod);
            setServiceFee(paymentData.serviceFee);
        }
    }, [setSelectedItem, setUserId, setZoneId, setWhatsapp, setActiveSubMethod, setServiceFee]);

    return (
        <div className='bg-[#1A1A1A]'>
            <div className='md:wrapper md:px-[120px] wrapper-mobile '>
                <div className='flex items-center justify-center pt-[30px] pb-[228px]'>

                    <DetailPaymentSucces />
                </div>
            </div>
        </div>
    );
}

export default PaymentSuccess;
