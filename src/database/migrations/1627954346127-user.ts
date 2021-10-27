import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class User1627954346127 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            isNullable: false,
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
            name: 'cpf',
            type: 'varchar',
            length: '250',
            isPrimary: false,
            isGenerated: false,
            isNullable: true,
          },
          {
            name: 'cnpj',
            type: 'varchar',
            length: '250',
            isPrimary: false,
            isGenerated: false,
            isNullable: true,
          },
          {
            name: 'cep',
            type: 'varchar',
            length: '250',
            isPrimary: false,
            isGenerated: false,
            isNullable: false,
          },
          {
            name: 'numberHouse',
            type: 'int',
            isPrimary: false,
            isGenerated: false,
            isNullable: false,
          },
          {
            name: 'phoneNumber',
            type: 'varchar',
            length: '250',
            isPrimary: false,
            isGenerated: false,
            isNullable: false,
          },
          {
            name: 'type',
            type: 'varchar',
            length: '250',
            isPrimary: false,
            isGenerated: false,
            isNullable: false,
          },
          {
            name: 'username',
            type: 'varchar',
            length: '250',
            isPrimary: false,
            isGenerated: false,
            isNullable: false,
          },
          {
            name: 'password',
            type: 'varchar',
            length: '250',
            isPrimary: false,
            isGenerated: false,
            isNullable: false,
          },
          {
            name: 'email',
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
    await queryRunner.dropTable('user');
  }
}
