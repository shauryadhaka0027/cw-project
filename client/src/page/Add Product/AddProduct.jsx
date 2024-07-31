import { Button, Form, Input } from 'antd';
import React from 'react';
import hrmsApi from '../../api/hrmsApi.js';
import { useMutation } from '@tanstack/react-query';

export const AddProduct = () => {
  const [form] = Form.useForm();
  const addProduct=useMutation({
    mutationFn:hrmsApi.createProduct
  })
  

  const onFinish = (values) => {
    console.log('Form values:', values);
    addProduct.mutate(values,{onSuccess:(data)=>{
        console.log("daaata",data)
        form.resetFields()
    }})

  };

  return (
    <div className='mt-10'>
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
    >
      <Form.Item
        label="Product Name"
        name="productName"
        rules={[{ required: true, message: 'Please input the product name!' }]}
      >
        <Input placeholder="Enter product name" />
      </Form.Item>
      <Form.Item
        label="Shade"
        name="shade"
        rules={[{ required: true, message: 'Please input the product name!' }]}
      >
        <Input placeholder="Enter product name" />
      </Form.Item>


      <Form.Item
        label="Description"
        name="desc"
        rules={[{ required: true, message: 'Please input the description!' }]}
      >
        <Input placeholder="Enter description" />
      </Form.Item>

      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: 'Please input the price!' }]}
      >
        <Input placeholder="Enter price" />
      </Form.Item>

      <Form.Item
        label="ImageUrl"
        name="image"
        rules={[{ required: true, message: 'Please input the quantity!' }]}
      >
        <Input placeholder="Enter quantity" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Product
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};


