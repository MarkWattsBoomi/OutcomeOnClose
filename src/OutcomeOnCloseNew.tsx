import { FCMNew } from "fcmlib/lib/FCMNew";
import * as React from 'react';
import { _OutcomeOnClose } from "./OutcomeOnClose";

export default class OutcomeOnClose extends FCMNew {

    //FCMCore will trigger this if we should update
    componentDidMount(): void {
        this.forceUpdate();
    }

    render() {
        return(
            <_OutcomeOnClose 
                parent={this}
                ref={(element: any) => {this.childComponent = element}} // here we are giving FCMCore a ref to our component
            />
        );
    }
}