import React, { useMemo } from 'react'
import { MlCards } from '../ExAllCo'
import { Asset } from '../types'
import { useAppSelector } from '../../redux/hooks';

interface OrgAddressProps {
  data?: Asset[],
  id?: string,
  onClick?: (event: any) => void;
}


const OrgAddress: React.FC<OrgAddressProps> = ({ onClick, id, data }) => {

  const values = useAppSelector((state) => state.cardSlice.IpData);

  const memoizationData = useMemo(() => {
    const live: number = values.live.reduce((acc: number, cur: number) => acc + cur, 0);
    const monitored: number = values.monitored.reduce((acc: number, cur: number) => acc + cur, 0);
    return { live, monitored, values };
  }, [values]);

  // memoizationData.map((item) => console.log(item));



  return (
    <div id={id} onClick={onClick} className='w-96 h-[260px] flex flex-col flex-nowrap justify-between
   rounded-md p-4 bg-[#1D2229] cursor-pointer hover:scale-95 duration-500'>

      <MlCards Element='TopElem' total={values.total} title="Ip Address" bgColor='#565392' img='/images/Earth Planet.svg' />
      <MlCards Element='centerElem' live="Live" liveVal={values.total_live} counterLived={values.live} currentmonitored={values.monitored}
        monitored="Monitored" monitoredVal={values.total_monitored} />


      <MlCards Element='bottomElem'
        ips='ips' ipsVal={memoizationData.values.ips}
        ports='Ports' portsVal={memoizationData.values.ports}
        vulns='Vulns' vulnsVal={memoizationData.values.vulns} />

    </div>
  )
}

export default OrgAddress