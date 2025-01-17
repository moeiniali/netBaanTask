import React, { useEffect, useState, useMemo, useCallback } from 'react'
import { OrgDomain, OrgCloud, OrgAddress, OrgTable, OrgSuspense } from '../ExAllCo'
import { fetchData } from '../../redux/slices/cardSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { ServerData, Asset } from '../types';

type Props = {}

const TmCard = (props: Props) => {
 const dispatch = useAppDispatch();
 const data: ServerData = useAppSelector((state) => state.cardSlice.data.data);
 const loading: boolean = useAppSelector((state) => state.cardSlice.loading);
 const [selectedData, setSelectedData] = useState<Asset[]>([]);

 useEffect(() => {
  dispatch(fetchData())
 }, [dispatch]);




 const handleSelectData = useCallback((type: string) => {

  const res = data?.assets?.filter((item) => {
   return item.type === type
  }

  );
  console.log(res);
  
  setSelectedData(res)
 }, [data])

 useEffect(() => {
  handleSelectData('domain')
 }, [data])

 console.log(selectedData);


 return (
  <div className={`${loading ? 'blur' : ''}  max-w-[1440px] m-auto h-full pt-20 p-4 flex  flex-row flex-wrap justify-center  xl:justify-between items-start gap-6`}>
   <OrgDomain id="domain" onClick={()=>handleSelectData('domain')} />
   <OrgAddress id="ip" onClick={()=>handleSelectData('ip')} />
   <OrgCloud id="cloud" onClick={()=>handleSelectData('cloud')} />

   <OrgTable data={selectedData} />



  </div>
 )
}

export default TmCard;
