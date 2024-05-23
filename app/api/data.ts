import data from "@/utils/data.json"

export default function handler(req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { country: { id: string; name: string; }[]; }): void; new(): any; }; }; }) {
    res.status(200).json(data);
  }