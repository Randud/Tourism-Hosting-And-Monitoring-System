import React from 'react';
import ReactDom from 'react-dom';
import MyInquiry from '../MyInquiry';
import {isTSAnyKeyword} from '@babel/types';

it("Render without errors", ()=>{
    const div = document.createElement("div");
    ReactDom.render(<MyInquiry></MyInquiry>, div)
})