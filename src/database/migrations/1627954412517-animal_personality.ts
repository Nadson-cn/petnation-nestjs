import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class animalPersonality1627954412517 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'animal_personality',
        columns: [
          {
            name: 'animal_id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            isNullable: false,
          },
          {
            name: 'personality_id',
            type: 'int',
            isPrimary: false,
            isGenerated: false,
            isNullable: false,
          },
        ],
        foreignKeys: [
          {
            name: 'animal_fk',
            columnNames: ['animal_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'animal',
            onDelete: 'NO ACTION',
            onUpdate: 'CASCADE',
          },
          {
            name: 'personality_fk',
            columnNames: ['personality_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'personality',
            onDelete: 'NO ACTION',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.clearSqlMemory();
    await queryRunner.dropForeignKey('animal_personality', 'animal_fk');
    await queryRunner.dropForeignKey('animal_personality', 'personality_fk');
    await queryRunner.dropTable('animal_personality');
  }
}
