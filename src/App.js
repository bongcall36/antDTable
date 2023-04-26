import React, {useState, useEffect} from 'react';
import { Tabs } from 'antd';
import { AntTable1 } from './components/antTable1'
import { AntTable2 } from './components/antTable2'
import { AntTable3 } from './components/antTable3'
import { AntTable4 } from './components/antTable4'
import { AntTable5 } from './components/antTable5'
import { AntTable6 } from './components/antTable6'
import { AntTable7 } from './components/antTable7'
import { AntTable8 } from './components/antTable8'
import { AntTable9 } from './components/antTable9'
import { AntTable10 } from './components/antTable10'
import { AntTable11 } from './components/antTable11'
import { AntTable12 } from './components/antTable12'
import { AntTable13 } from './components/antTable13'
import { AntTable14 } from './components/antTable14'
import { AntTable15 } from './components/antTable15'
import { AntTable16 } from './components/antTable16'
import { AntTable17 } from './components/antTable17'
import { AntTable18 } from './components/antTable18'
import { AntTable19 } from './components/antTable19'
import { AntTable20 } from './components/antTable20'
import { AntTable21 } from './components/antTable21'
import { AntTable22 } from './components/antTable22'
import { AntTable23 } from './components/antTable23'
import { AntTable24 } from './components/antTable24'
import { AntTable25 } from './components/antTable25'
import { AntTable26 } from './components/antTable26'
import { AntTable27 } from './components/antTable27'
import { AntTable28 } from './components/antTable28'
import { AntTable29 } from './components/antTable29'
import { AntTable30 } from './components/antTable30'
import { AntTable31 } from './components/antTable31'
import { AntTable32 } from './components/antTable32'

const onChange = (key, callBack) => {
  console.log(key);
  callBack(key)
};

export default function App() {
  const [activeKey, SetActiveKey] = useState('1')

  const items = [
    {
      key: '1',
      label: `Tab 1`,
      children: <AntTable1 activeKey={activeKey} setTab={'1'} />,
    },
    {
      key: '2',
      label: `Tab 2`,
      children: <AntTable2 activeKey={activeKey} setTab={'2'} />,
    },
    {
      key: '3',
      label: `Tab 3`,
      children: <AntTable3 activeKey={activeKey} setTab={'3'} />,
    },
    {
      key: '4',
      label: `Tab 4`,
      children: <AntTable4 activeKey={activeKey} setTab={'4'} />,
    },  
    {
      key: '5',
      label: `Tab 5`,
      children: <AntTable5 activeKey={activeKey} setTab={'5'} />,
    },   
    {
      key: '6',
      label: `Tab 6`,
      children: <AntTable6 activeKey={activeKey} setTab={'6'} />,
    },  
    {
      key: '7',
      label: `Tab 7`,
      children: <AntTable7 activeKey={activeKey} setTab={'7'} />,
    },  
    {
      key: '8',
      label: `Tab 8`,
      children: <AntTable8 activeKey={activeKey} setTab={'8'} />,
    },  
    {
      key: '9',
      label: `Tab 9`,
      children: <AntTable9 activeKey={activeKey} setTab={'9'} />,
    },  
    {
      key: '10',
      label: `Tab 10`,
      children: <AntTable10 activeKey={activeKey} setTab={'10'} />,
    },  
    {
      key: '11',
      label: `Tab 11`,
      children: <AntTable11 activeKey={activeKey} setTab={'11'} />,
    },  
    {
      key: '12',
      label: `Tab 12`,
      children: <AntTable12 activeKey={activeKey} setTab={'12'} />,
    },  
    {
      key: '13',
      label: `Tab 13`,
      children: <AntTable13 activeKey={activeKey} setTab={'13'} />,
    },  
    {
      key: '14',
      label: `Tab 14`,
      children: <AntTable14 activeKey={activeKey} setTab={'14'} />,
    },  
    {
      key: '15',
      label: `Tab 15`,
      children: <AntTable15 activeKey={activeKey} setTab={'15'} />,
    },  
    {
      key: '16',
      label: `Tab 16`,
      children: <AntTable16 activeKey={activeKey} setTab={'16'} />,
    },  
    {
      key: '17',
      label: `Tab 17`,
      children: <AntTable17 activeKey={activeKey} setTab={'17'} />,
    },  
    {
      key: '18',
      label: `Tab 18`,
      children: <AntTable18 activeKey={activeKey} setTab={'18'} />,
    },  
    {
      key: '19',
      label: `Tab 19`,
      children: <AntTable19 activeKey={activeKey} setTab={'19'} />,
    },  
    {
      key: '20',
      label: `Tab 20`,
      children: <AntTable20 activeKey={activeKey} setTab={'20'} />,
    },  
    {
      key: '21',
      label: `Tab 21`,
      children: <AntTable21 activeKey={activeKey} setTab={'21'} />,
    },  
    {
      key: '22',
      label: `Tab 22`,
      children: <AntTable22 activeKey={activeKey} setTab={'22'} />,
    },  
    {
      key: '23',
      label: `Tab 23`,
      children: <AntTable23 activeKey={activeKey} setTab={'23'} />,
    },  
    {
      key: '24',
      label: `Tab 24`,
      children: <AntTable24 activeKey={activeKey} setTab={'24'} />,
    },  
    {
      key: '25',
      label: `Tab 25`,
      children: <AntTable25 activeKey={activeKey} setTab={'25'} />,
    },  
    {
      key: '26',
      label: `Tab 26`,
      children: <AntTable26 activeKey={activeKey} setTab={'26'} />,
    },  
    {
      key: '27',
      label: `Tab 27`,
      children: <AntTable27 activeKey={activeKey} setTab={'27'} />,
    },  
    {
      key: '28',
      label: `Tab 28`,
      children: <AntTable28 activeKey={activeKey} setTab={'28'} />,
    },  
    {
      key: '29',
      label: `Tab 29`,
      children: <AntTable29 activeKey={activeKey} setTab={'29'} />,
    },  
    {
      key: '30',
      label: `Tab 30`,
      children: <AntTable30 activeKey={activeKey} setTab={'30'} />,
    },  
    {
      key: '31',
      label: `Tab 31`,
      children: <AntTable31 activeKey={activeKey} setTab={'31'} />,
    }, 
    {
      key: '32',
      label: `Tab 32`,
      children: <AntTable32 activeKey={activeKey} setTab={'32'} />,
    },                      
  ]; 

  return(
   <>
   <Tabs defaultActiveKey="1" items={items} onChange={(e)=>onChange(e, SetActiveKey)} />
   </>
  )
}