import React, { Component } from 'react';
import styleloadding from './loadding.module.css';
class Loadding extends Component{
    render() {
        return (
            <>
            <div className={styleloadding.loader}>
                    <div className={styleloadding.loaderinner+' '+styleloadding.pacman}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                </div>
            </div>
            </>
    )}
}
export default Loadding