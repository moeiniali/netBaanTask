import React from 'react'
import { Asset } from '../types'

interface OrgTableProps {
  data?: Asset[]
}

const OrgTable: React.FC<OrgTableProps> = ({ data }) => {




  return (




    <div className="w-full relative overflow-x-auto shadow-md sm:rounded-lg bg-[#232936]">
      <p className='text-white font-normal text-base mb-10 p-4'>Assets</p>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Grade
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Total Vulnerabilities
            </th>
            <th scope="col" className="px-6 py-3">
              Last Seen
            </th>

          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.name} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <div className='pentagon '>
                  <span>
                    {item.grade}
                  </span>
                </div>
              </th>
              <td className="px-6 py-4">
                {item.name}
              </td>
              <td className="px-6 py-4">
                {item.total_vuls}
              </td>
              <td className="px-6 py-4">
                {new Date(item.lastSeen).toLocaleString()}
              </td>

            </tr>

          ))}


        </tbody>
      </table>
    </div>



  )
}

export default OrgTable