import { Column, Entity } from "typeorm";

@Entity()
export class Champion {

    @Column({primary:true, generated:true})
    id:number;

    @Column()
    name:string;

    @Column()
    role:string;

    @Column()
    releaseDate:Date;

    @Column()
    description:string;

}
