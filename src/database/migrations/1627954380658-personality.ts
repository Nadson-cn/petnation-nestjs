import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Personality1627954380658 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'personality',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
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
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.clearSqlMemory();
    await queryRunner.dropTable('personality');
  }
}
