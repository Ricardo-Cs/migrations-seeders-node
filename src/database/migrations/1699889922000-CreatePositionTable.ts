import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreatePositionTable1699889922000 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'positions',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    }
                ]
            }), true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('positions');
    }

}
