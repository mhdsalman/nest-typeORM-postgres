import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserTable1729033890044 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "user",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "firstName",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "lastName",
                        type: "varchar",
                        isNullable: false,
                    }
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user");
    }
}
