import { DataTypes, Model } from "sequelize";
import sequelize from "./index";
interface postAttributes {
	id?: number;
	title: string;
	url: string;
	img: string;
	text: string;
	stack: string;
}

export class gitpost extends Model<postAttributes> {
	public readonly id!: number;
	public title!: string;
	public url!: string;
	public img!: string;
    public text!: string;
	public stack!: string;
	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;

	public static associations: {};
}
gitpost.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		title: {
			type: DataTypes.STRING,
		},
		img: {
			type: DataTypes.STRING,
		},
		text: {
			type: DataTypes.STRING,
		},
		stack: {
			type: DataTypes.STRING,
		},
        url:{
            type: DataTypes.STRING,
        }
	},
	{
		sequelize,
		modelName: "gitpost",
	}
);
