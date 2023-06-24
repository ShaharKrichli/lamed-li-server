import { Sequelize } from 'sequelize-typescript';
import envVar from 'src/utilities/env-var';

import { Category } from 'src/models/category/entities/category.entity';
import { Request } from 'src/models/request/entities/request.entity';
import { ReqDocs } from 'src/models/document/entities/reqDocs.entity';
import { DocData } from 'src/models/document/entities/docData.entity';
import { Entitle } from 'src/models/request/entities/entitle.entity';
import { ReqToDoc } from 'src/models/request/entities/reqToDoc.entity';
import { ReqDocTypes } from 'src/models/document/entities/reqDocTypes.entity';
import { ReqDocToDocData } from 'src/models/document/entities/reqDocToDocData.entity';
import { DocTypes } from 'src/models/document/entities/docTypes';
import { ReqError } from 'src/models/errors/entities/reqError.entity';
import { DocError } from 'src/models/errors/entities/docError.entity';
import { DocsDecisionFunc } from 'src/models/docsDecisionFunc/entities/docsDecisionFunc.entity';
import { ReqDocsToDocsDecisionFunc } from 'src/models/docsDecisionFunc/entities/reqDocsTodocsDecisionFunc.entity';
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
import { PersonalApplying } from 'src/models/personalApplying/entities/personalApplying.entity';
import { PersonalRequest } from 'src/models/personalRequest/entities/personalRequest.entity';
import { ExtraRequestData } from 'src/models/extraRequestData/entities/extraRequestData.entity';
import { BlackStatusCode } from 'src/models/personalRequest/entities/blackCode.entity';
import { ReqStatResCode } from 'src/models/personalRequest/entities/reqStatRessCode.entity';
import { ReqKindCode } from 'src/models/personalRequest/entities/reqKindCode.entity';
import { ReqStatCode } from 'src/models/personalRequest/entities/reqStatCode.entity';
import { PersonalDocument } from 'src/models/personalDocument/entities/personalDocument.entity';
import { DocumentStatusCode } from 'src/models/personalDocument/entities/documentStatusCode.entity';
import { SkipDecisionFunc } from 'src/models/genericFields/entities/skipDecisionFunc.entity';
import { MatchSurveyAnswer } from 'src/models/matchSurveyAnswer/entities/matchSurveyAnswer.entity';
import { PersonalSurveyRecommend } from 'src/models/personalSurveyRecommend/entities/personalSurveyRecommend.entity';
import { SendToRedCode } from 'src/models/personalRequest/entities/sendToRedCode.entity';
import { SurveyRecommend } from 'src/models/surveyRecommend/entities/surveyRecommend.entity';
import { SurveyRecommendToRequest } from 'src/models/surveyRecommend/entities/surveyRecommendToRequest.entity';
import { DocRedStatusCode } from 'src/models/personalDocument/entities/docRedStatusCode.entity';
import { PersonalMatchSurvey } from 'src/models/personalMatchSurvey/entities/personalMatchSurvey.entity';
import { ProgressGroup } from 'src/models/progressGroup/entities/progressGroup.entity';
import { OpenTypeStatus } from 'src/models/request/entities/openTypeStatus';
import { OptionStyle } from 'src/models/genericFields/entities/types/optionStyle.entity';
import { DropdownOptions } from 'src/models/genericFields/dropdownOptions/entities/dropdownOptions.entity';
import { RecommendsFunc } from 'src/models/recommendsFunc/entities/recommendsFunc.entity';
import { RequestsToRecommendsFunc } from 'src/models/recommendsFunc/entities/requestsToRecommendsFunc.entity';
import { Benefit } from 'src/models/benefit/entities/benefit.entity';
import { DocsGroup } from 'src/models/docsGroup/entities/docsGroup.entity';
import { PilotIds } from 'src/models/pilotIds/entities/pilotIds.entity';
import { ExtraDataCodes } from 'src/models/extraDataCodes/entities/extraDataCodes.entity';
import { Link } from 'src/models/links/entities/link.entity';
import { PersonalDocumentHistory } from 'src/models/personalDocument/entities/personalDocumentHistory.entity';
import { CrudType } from 'src/models/extraDataCodes/crudType.entity';
import { PersonalRequestHistory } from 'src/models/personalRequest/entities/personalRequestHistory.entity';
import { ExtraRequestDataHistory } from 'src/models/extraRequestData/entities/extreaRequestDataHistory.entity';
import { Analytics } from 'src/models/analytics/entites/analytics.entity';
import { Declaration } from 'src/models/declarations/entites/declaration.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        database: envVar.DB_DATABASE,
        host: envVar.DB_HOST,
        port: 5432,
        schema: ["TEST"].includes(envVar.NODE_ENV!) ? 'test' : 'public',
        username: envVar.DB_USERNAME,
        password: envVar.DB_PASSWORD,
        dialect: 'postgres',
        ssl: true,
        dialectOptions: {
          ssl: {
            require: true,
          },
        },
        models: [Category, Request, Entitle, ReqDocs, ReqToDoc, DocData,
          ReqDocTypes, ReqDocToDocData, DocTypes, ReqError, DocError,
          PersonalRequest, ExtraRequestData, BlackStatusCode, ReqStatResCode,
          ReqKindCode, ReqStatCode, PersonalDocument, PersonalApplying, ReqDocsToDocsDecisionFunc,
          DocumentStatusCode, FieldsCondition, FieldTypes, FieldValidators,
          GenericFields, FieldMultOptions, FieldValidatorsTypes, FieldDirectionDisplayType,
          ConditionTypes, EqualConditionOptions, PageTitles, SingleOption, SendToRedCode,
          DocsDecisionFunc, DocRedStatusCode, SkipDecisionFunc, RecommendsFunc,
          RequestsToRecommendsFunc, MatchSurveyAnswer, PersonalSurveyRecommend,
          SurveyRecommend, SurveyRecommendToRequest, ProgressGroup, PersonalMatchSurvey,
          OpenTypeStatus, OptionStyle, DropdownOptions, Benefit, DocsGroup, PilotIds,
          Analytics, Declaration,
          ExtraDataCodes, Link, PersonalDocumentHistory, CrudType, PersonalRequestHistory, ExtraRequestDataHistory
        ]
      });

      sequelize.addModels([Category, Request, Entitle, ReqDocs, ReqToDoc, DocData,
        ReqDocTypes, ReqDocToDocData, DocTypes, ReqError, DocError,
        PersonalRequest, ExtraRequestData, BlackStatusCode, ReqStatResCode,
        ReqKindCode, ReqStatCode, PersonalDocument, PersonalApplying, ReqDocsToDocsDecisionFunc,
        DocumentStatusCode, FieldsCondition, FieldTypes, FieldValidators,
        GenericFields, FieldMultOptions, FieldValidatorsTypes, FieldDirectionDisplayType,
        ConditionTypes, EqualConditionOptions, PageTitles, SingleOption, SendToRedCode,
        DocsDecisionFunc, DocRedStatusCode, SkipDecisionFunc, RecommendsFunc,
        RequestsToRecommendsFunc, MatchSurveyAnswer, PersonalSurveyRecommend,
        SurveyRecommend, SurveyRecommendToRequest, ProgressGroup, PersonalMatchSurvey,
        OpenTypeStatus, OptionStyle, DropdownOptions, Benefit, DocsGroup, PilotIds,
        Analytics, Declaration,
        ExtraDataCodes, Link, PersonalDocumentHistory, CrudType, PersonalRequestHistory, ExtraRequestDataHistory
      ]);

      // await sequelize.sync(); // New tablets created 18.4 - Need to remain active for pre-prod & prod
      return sequelize;
    },
  }
];


