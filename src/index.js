import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Mentions } from 'antd';

const { Option } = Mentions;

function onChange(value) {
  console.log('Change:', value);
}

function onSelect(option) {
  console.log('select', option);
}

ReactDOM.render(
  <Mentions
    style={{ width: '100%' }}
    onChange={onChange}
    onSelect={onSelect}
    defaultValue="@afc163"
  >
    <Option value="afc163">afc163</Option>
    <Option value="zombieJ">zombieJ</Option>
    <Option value="yesmeck">yesmeck</Option>
    <Option value="yesmeck1">yesmeck</Option>
    <Option value="yesmeck2">yesmeck</Option>
    <Option value="yesmeck3">yesmeck</Option>
    <Option value="yesmeck4">yesmeck</Option>
    <Option value="yesmeck5">yesmeck</Option>
    <Option value="yesmeck6">yesmeck</Option>
    <Option value="yesmeck7">yesmeck</Option>
    <Option value="yesmeck8">yesmeck</Option>
    <Option value="yesmeck9">yesmeck</Option>
    <Option value="yesmeck11">yesmeck</Option>
    <Option value="yesmeck22">yesmeck</Option>
    <Option value="yesmeck33">yesmeck</Option>
    <Option value="yesmeck44">yesmeck</Option>
    <Option value="yesmeck55">yesmeck</Option>
  </Mentions>,
  document.getElementById('container'),
);