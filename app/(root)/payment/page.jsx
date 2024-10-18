'use client'

import DetailPayment from '@/components/DetailPayment';
import ScanPayment from '@/components/ScanPayment';
import WaitingScan from '@/components/WaitingScan';
import useStore from '@/zustand/useGameStore';
import React, { useEffect } from 'react';

function Payment() {
    const {
        setSelectedItem,
        setUserId,
        setZoneId,
        setWhatsapp,
        setActiveSubMethod,
        setServiceFee,
    } = useStore();

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

        const timer = setTimeout(() => {
            window.location.href = '/payment-success';
        }, 5000);

        return () => clearTimeout(timer);
    }, [setSelectedItem, setUserId, setZoneId, setWhatsapp, setActiveSubMethod, setServiceFee]);

    return (
        <div className='bg-[#1A1A1A]'>
            <div className='md:wrapper md:px-[120px] wrapper-mobile flex items-start md:flex-row flex-col gap-5 pt-[30px] pb-[228px]'>
                <div className='flex items-center flex-col gap-5'>
                    <WaitingScan />
                    <ScanPayment />
                </div>
                <DetailPayment />
            </div>
        </div>
    );
}

export default Payment;
