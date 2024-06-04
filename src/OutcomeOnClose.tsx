import React, { CSSProperties } from 'react';
import { FCMCore } from 'fcmlib/lib/FCMCore';

export class _OutcomeOnClose extends React.Component<any,any> {

    version: string = '1.0.0';
    
    component: FCMCore;

    constructor(props: any) {
        super(props);
        this.component = this.props.parent;
        this.triggerOutcome = this.triggerOutcome.bind(this);
        window.addEventListener("beforeunload", this.triggerOutcome);
    }

    // https://gb.flow-prod.boomi.com/974596fc-e32e-4ffd-a3d2-40952d176946/play/EDI?environment-id=3bd05c10-8185-4bde-936d-6a16ec32dfd5&join=a97053f1-7f82-4933-866d-76ce810f9a56&environment-id=3bd05c10-8185-4bde-936d-6a16ec32dfd5
    async triggerOutcome() {
        let ocName:  string = Object.keys(this.component.outcomes)[0];
        if(ocName){
            this.component.triggerOutcome(ocName);
        }
    }

    async componentUpdated(changeDetected: boolean) {
    }

    render() {
        
        // handle classes attribute and hidden and size
        let classes: string = '';
        const style: CSSProperties = {};
        style.width = '0px';
        style.height = '0px';

        if (this.component.isVisible === false) {
            style.display = 'none';
        }
        
        const title: string = this.component.label || '';
        
        return (
            <div
                className={classes}
                style={style}
            >
                
            </div>
        );
    }

}

