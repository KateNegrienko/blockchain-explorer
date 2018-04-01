export class TransactionData {
    public hash: string;
    public ver: number;
    public vin_sz: number;
    public lock_time: string;
    public size: number;
    public block_height: number;
    public relayed_by: string;
    public inputs: any[];
    public out: TransactionOutData[];
}


export class TransactionOutData {
    public value: number;
    public hash: string;
    public script: string;
}
