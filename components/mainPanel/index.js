import React, { Component } from 'react';
var crypto = require('crypto');
import './index.scss';

class MainPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1,
        }
    }

    componentDidMount() {
        var UID = "UF0359B71D";
        var KEY = "uinl5kzjwixdbllf";
        var ts = Math.floor((new Date()).getTime() / 1000);
        var str = "ts=" + ts + "&uid=" + UID;
        var aa = crypto.createHmac(str,KEY);
        console.log(aa);
    }

    render() {
        return (
            <div className="panelWrap">
                <p className="title">
                    天气查询
                </p>
                <div className="citySelect">
                    <span>
                        选择城市：
                    </span>
                    <select>
                        <option>
                            北京
                        </option>
                        <option>
                            上海
                        </option>
                    </select>
                </div>
            </div>
        )
    }
}

export default MainPanel;
