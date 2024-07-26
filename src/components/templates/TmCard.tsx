import React, { useEffect, useState, useMemo, useCallback } from 'react'
import { OrgDomain, OrgCloud, OrgAddress, OrgTable, OrgSuspense } from '../ExAllCo'
import { fetchData } from '../../redux/slices/cardSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { ServerData, Asset } from '../types';

type Props = {}

const TmCard = (props: Props) => {
 const dispatch = useAppDispatch();
 const data: ServerData = useAppSelector((state) => state.cardSlice.data);
 const loading: boolean = useAppSelector((state) => state.cardSlice.loading);
 const [selectedData, setSelectedData] = useState<Asset[]>([]);

 useEffect(() => {
  dispatch(fetchData())
 }, [dispatch]);

 useEffect(() => {
  handleSelectData('domain')
 }, [data])


 const handleSelectData = useCallback(async (event: any) => {
  let type = event?.currentTarget?.id;
  const res = data?.assets?.filter((item) => {
   if (type) {
    return item.type === type
   } else {
    return item.type === "domain"
   }
  }
  );
  setSelectedData(res)
 }, [data])

 console.log(loading);


 return (
  <div className={`${loading ? 'blur' : ''}  max-w-[1440px] m-auto h-full pt-20 p-4 flex  flex-row flex-wrap justify-center  xl:justify-between items-start gap-6`}>
   <OrgDomain id="domain" onClick={handleSelectData} />
   <OrgAddress id="ip" onClick={handleSelectData} />
   <OrgCloud id="cloud" onClick={handleSelectData} />

   <OrgTable data={selectedData} />



  </div>
 )
}

export default TmCard;