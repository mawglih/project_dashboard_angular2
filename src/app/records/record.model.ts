export class Record {
    public title: string;
    public division: string;
    public project_owner: string;
    public budget: number;
    public status: string;
    public created: any;
    public modified: any;

    constructor(title: string, division:string, project_owner:string, budget:number, status:string, created:any, modified:any) {
        this.title = title;
        this.division = division;
        this.project_owner = project_owner;
        this.budget = budget;
        this.status = status;
        this.created = new Date();
        this.modified = new Date();
    }
}