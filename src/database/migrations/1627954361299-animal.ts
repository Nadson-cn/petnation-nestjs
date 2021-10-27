import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Animal1627954361299 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'animal',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            isNullable: false,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '250',
            isPrimary: false,
            isGenerated: false,
            isNullable: false,
          },
          {
            name: 'species',
            type: 'varchar',
            length: '250',
            isPrimary: false,
            isGenerated: false,
            isNullable: false,
          },
          {
            name: 'breed',
            type: 'varchar',
            length: '250',
            isPrimary: false,
            isGenerated: false,
            isNullable: false,
          },
          {
            name: 'description',
            type: 'varchar',
            length: '250',
            isPrimary: false,
            isGenerated: false,
            isNullable: false,
          },
          {
            name: 'sex',
            type: 'varchar',
            length: '250',
            isPrimary: false,
            isGenerated: false,
            isNullable: false,
          },
          {
            name: 'age',
            type: 'int',
            isPrimary: false,
            isGenerated: false,
            isNullable: false,
          },
          {
            name: 'user_id',
            type: 'int',
            isPrimary: false,
            isGenerated: false,
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'user_fk',
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'user',
            onDelete: 'NO ACTION',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.clearSqlMemory();
    await queryRunner.dropForeignKey('animal', 'user_fk');
    await queryRunner.dropTable('animal');
  }
}
