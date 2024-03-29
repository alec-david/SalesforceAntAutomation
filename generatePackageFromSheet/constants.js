let metadataSet = generateMetadataSet();
module.exports = metadataSet;

//All Metadata types as defined here:
//https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_types_list.htm
function generateMetadataSet() {
  let set = new Set();
  set.add('AccountSettings');
  set.add('ActionLinkGroupTemplate');
  set.add('ActionOverride');
  set.add('ActivitiesSettings');
  set.add('AddressSettings');
  set.add('AnalyticSnapshot');
  set.add('ApexClass');
  set.add('ApexComponent');
  set.add('ApexPage');
  set.add('ApexTrigger');
  set.add('AppMenu');
  set.add('ApprovalProcess');
  set.add('ArticleType');
  set.add('AssignmentRules');
  set.add('AuthProvider');
  set.add('AuraDefinitionBundle');
  set.add('AutoResponseRules');
  set.add('BaseSharingRule');
  set.add('BrandingSet');
  set.add('BusinessHoursSettings');
  set.add('BusinessProcess');
  set.add('CallCenter');
  set.add('CaseSettings');
  set.add('CaseSubjectParticle');
  set.add('Certificate');
  set.add('ChatterAnswersSettings');
  set.add('ChatterExtension');
  set.add('CleanDataService');
  set.add('CompanySettings');
  set.add('Community');
  set.add('CommunityTemplateDefinition');
  set.add('CommunityThemeDefinition');
  set.add('CompactLayout');
  set.add('ConnectedApp');
  set.add('ContentAsset');
  set.add('ContractSettings');
  set.add('CorsWhitelistOrigin');
  set.add('CriteriaBasedSharingRule');
  set.add('CustomApplication');
  set.add('CustomApplicationComponent');
  set.add('CustomFeedFilter');
  set.add('CustomField');
  set.add('CustomLabel');
  set.add('CustomMetadata');
  set.add('CustomLabels');
  set.add('CustomObject');
  set.add('CustomObjectTranslation');
  set.add('CustomPageWebLink');
  set.add('CustomPermission');
  set.add('CustomSite');
  set.add('CustomTab');
  set.add('Dashboard');
  set.add('DataCategoryGroup');
  set.add('DelegateGroup');
  set.add('Document');
  set.add('DuplicateRule');
  set.add('EclairGeoData');
  set.add('EmailTemplate');
  set.add('EntitlementProcess');
  set.add('EntitlementSettings');
  set.add('EntitlementTemplate');
  set.add('EventDelivery');
  set.add('EventSubscription');
  set.add('ExternalServiceRegistration');
  set.add('ExternalDataSource');
  set.add('FieldSet');
  set.add('FileUploadAndDownloadSecuritySettings');
  set.add('FlexiPage');
  set.add('Flow');
  set.add('FlowDefinition');
  set.add('Folder');
  set.add('FolderShare');
  set.add('ForecastingSettings');
  set.add('GlobalValueSet');
  set.add('GlobalValueSetTranslation');
  set.add('GlobalPicklistValue');
  set.add('Group');
  set.add('HomePageComponent');
  set.add('HomePageLayout');
  set.add('IdeasSettings');
  set.add('Index');
  set.add('InstalledPackage');
  set.add('KeywordList');
  set.add('KnowledgeSettings');
  set.add('Layout');
  set.add('Letterhead');
  set.add('ListView');
  set.add('LiveAgentSettings');
  set.add('LiveChatAgentConfig');
  set.add('LiveChatButton');
  set.add('LiveChatDeployment');
  set.add('LiveChatSensitiveDataRule');
  set.add('ManagedTopics');
  set.add('MatchingRule');
  set.add('Metadata');
  set.add('MetadataWithContent');
  set.add('MilestoneType');
  set.add('MobileSettings');
  set.add('ModerationRule');
  set.add('NamedCredential');
  set.add('NamedFilter');
  set.add('NameSettings');
  set.add('Network');
  set.add('NetworkBranding');
  set.add('OpportunitySettings');
  set.add('OrderSettings');
  set.add('OrgPreferenceSettings');
  set.add('OwnerSharingRule');
  set.add('Package');
  set.add('PathAssistant');
  set.add('PathAssistantSettings');
  set.add('PermissionSet');
  set.add('PersonalJourneySettings');
  set.add('Picklist (Including Dependent Picklist)');
  set.add('PlatformCachePartition');
  set.add('Portal');
  set.add('PostTemplate');
  set.add('ProductSettings');
  set.add('Profile');
  set.add('ProfileActionOverride');
  set.add('ProfilePasswordPolicy');
  set.add('ProfileSessionSetting');
  set.add('Queue');
  set.add('QuickAction');
  set.add('QuoteSettings');
  set.add('RecordType');
  set.add('RemoteSiteSetting');
  set.add('Report');
  set.add('ReportType');
  set.add('Role');
  set.add('SamlSsoConfig');
  set.add('Scontrol');
  set.add('SearchLayouts');
  set.add('SearchSettings');
  set.add('SecuritySettings');
  set.add('SharingBaseRule');
  set.add('SharingCriteriaRule');
  set.add('SharingOwnerRule');
  set.add('SharingReason');
  set.add('SharingRecalculation');
  set.add('SharingRules');
  set.add('SharingSet');
  set.add('SharingTerritoryRule');
  set.add('SiteDotCom');
  set.add('Skill');
  set.add('SocialCustomerServiceSettings');
  set.add('StandardValueSet');
  set.add('StandardValueSetTranslation');
  set.add('StaticResource');
  set.add('SynonymDictionary');
  set.add('Territory');
  set.add('Territory2');
  set.add('Territory2Model');
  set.add('Territory2Rule');
  set.add('Territory2Settings');
  set.add('Territory2Type');
  set.add('TopicsForObjects');
  set.add('TransactionSecurityPolicy');
  set.add('Translations');
  set.add('ValidationRule');
  set.add('WaveApplication');
  set.add('WaveDashboard');
  set.add('WaveDataflow');
  set.add('WaveDataset');
  set.add('WaveLens');
  set.add('WaveTemplateBundle');
  set.add('Wavexmd');
  set.add('WebLink');
  set.add('Workflow');
  set.add('WorkflowAlert');
  set.add('WorkflowFieldUpdate');
  set.add('WorkflowFlowAction');
  set.add('WorkflowKnowledgePublish');
  set.add('WorkflowOutboundMessage');
  set.add('WorkflowRule');
  set.add('WorkflowTask');
  return set;
}
