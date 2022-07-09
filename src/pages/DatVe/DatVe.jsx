import React, { useState } from 'react'
import { Table } from 'antd';

export default function DatVe() {


    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ];
      
      const columns = [
        {
          title: '',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '',
          dataIndex: 'address',
          key: 'address',
        },
      ];


    return (
        <div>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    )
}
