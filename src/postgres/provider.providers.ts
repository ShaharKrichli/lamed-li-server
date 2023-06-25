import { Sequelize } from 'sequelize-typescript';
import { FieldValidators } from 'src/models/genericFields/entities/fieldsValidators.entity';
import { GenericFields } from 'src/models/genericFields/entities/genericFields.entity';
import { FieldMultOptions } from 'src/models/genericFields/entities/multOptionField.entity';
import { EqualConditionOptions } from 'src/models/genericFields/entities/equalConditionOptions.entity';
import { FieldsCondition } from 'src/models/genericFields/entities/fieldsCondition.entity';
import { PageTitles } from 'src/models/pageTitles/entities/pageTitles.entity';
import { FieldTypes } from 'src/models/genericFields/entities/types/fieldTypes.entity';
import { FieldValidatorsTypes } from 'src/models/genericFields/entities/types/fieldValidatorsTypes.entity';
import { FieldDirectionDisplayType } from 'src/models/genericFields/entities/types/fieldDirectionDisplayTypes.entity';
import { ConditionTypes } from 'src/models/genericFields/entities/types/conditionTypes.entity';
import { SingleOption } from 'src/models/genericFields/entities/singleOption.entity';
import { SkipDecisionFunc } from 'src/models/genericFields/entities/skipDecisionFunc.entity';
import { OptionStyle } from 'src/models/genericFields/entities/types/optionStyle.entity';
import { DropdownOptions } from 'src/models/genericFields/dropdownOptions/entities/dropdownOptions.entity';
import { User } from 'src/models/user/entities/user.entity';
import { RoleTypes } from 'src/models/user/entities/roleTypes.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
        port: 5432,
        schema: 'public',
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        dialect: 'postgres',
        models: [FieldsCondition, FieldTypes, FieldValidators,
          GenericFields, FieldMultOptions, FieldValidatorsTypes, FieldDirectionDisplayType,
          ConditionTypes, EqualConditionOptions, PageTitles, SingleOption, SkipDecisionFunc,
          , OptionStyle, DropdownOptions, User, RoleTypes
        ]
      });

      sequelize.addModels([FieldsCondition, FieldTypes, FieldValidators,
        GenericFields, FieldMultOptions, FieldValidatorsTypes, FieldDirectionDisplayType,
        ConditionTypes, EqualConditionOptions, PageTitles, SingleOption, SkipDecisionFunc,
        , OptionStyle, DropdownOptions, User, RoleTypes
      ]);

      await sequelize.sync();
      return sequelize;
    },
  }
];


