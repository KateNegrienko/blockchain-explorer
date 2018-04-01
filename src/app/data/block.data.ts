import { TransactionData, TransactionOutData } from './transaction.data';
export class BlockData {
    public height: number;
    public hash: string;
    public time: number;
    public main_chain: boolean;
    public ver: number;
    public prev_block: string;
    public mrkl_root: string;
    public bits: number;
    public nonce: number;
    public n_tx: number;
    public size: number;
    public block_index: number;
    public received_time: number;
    public relayed_by: string;
    public tx: TransactionData[];
}
