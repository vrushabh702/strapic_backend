import type { Schema, Struct } from '@strapi/strapi';

export interface AppeakServiceForTechnologyAppeakServiceForTechnology
  extends Struct.ComponentSchema {
  collectionName: 'components_appeak_service_for_technology_appeak_service_for_technologies';
  info: {
    displayName: 'appeak_service_for_technology';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface BenefitsBenefit extends Struct.ComponentSchema {
  collectionName: 'components_benefits_benefits';
  info: {
    displayName: 'benefit';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BenefitsBenefitOfAppeak extends Struct.ComponentSchema {
  collectionName: 'components_benefits_benefit_of_appeaks';
  info: {
    displayName: 'benefit_of_appeak';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlogsBlogContent extends Struct.ComponentSchema {
  collectionName: 'components_blogs_blog_contents';
  info: {
    displayName: 'blog_content';
    icon: 'arrowLeft';
  };
  attributes: {};
}

export interface BlogsBlogDescription extends Struct.ComponentSchema {
  collectionName: 'components_blogs_blog_descriptions';
  info: {
    displayName: 'blog_description';
    icon: 'bold';
  };
  attributes: {
    blog_content: Schema.Attribute.RichText;
  };
}

export interface BlogsHeaderedRoundBulletList extends Struct.ComponentSchema {
  collectionName: 'components_blogs_headered_round_bullet_lists';
  info: {
    displayName: 'HeaderedRoundBulletList';
  };
  attributes: {
    blogList: Schema.Attribute.Component<'common-component.list', true>;
    blogListHeading: Schema.Attribute.Component<
      'common-component.heading',
      false
    >;
  };
}

export interface CommonComponentCards extends Struct.ComponentSchema {
  collectionName: 'components_common_component_cards';
  info: {
    displayName: 'Cards';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface CommonComponentHeading extends Struct.ComponentSchema {
  collectionName: 'components_common_component_headings';
  info: {
    displayName: 'heading';
  };
  attributes: {
    heading: Schema.Attribute.String;
  };
}

export interface CommonComponentList extends Struct.ComponentSchema {
  collectionName: 'components_common_component_lists';
  info: {
    displayName: 'List';
  };
  attributes: {
    list: Schema.Attribute.String;
  };
}

export interface CommonComponentParagraphs extends Struct.ComponentSchema {
  collectionName: 'components_common_component_paragraphs';
  info: {
    displayName: 'paragraphs';
  };
  attributes: {
    paragraph: Schema.Attribute.Blocks;
  };
}

export interface CommonComponentProjectInfo extends Struct.ComponentSchema {
  collectionName: 'components_common_component_project_infos';
  info: {
    displayName: 'Project Info';
  };
  attributes: {
    content: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DynamicServiceContentConclusion
  extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_service_content_conclusion_s';
  info: {
    displayName: 'conclusion ';
  };
  attributes: {
    button_slug: Schema.Attribute.String;
    button_text: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    paragraph: Schema.Attribute.Text;
    testimonial_area: Schema.Attribute.String;
    testimonial_description: Schema.Attribute.String;
    testimonial_heading: Schema.Attribute.String;
    testimonial_name: Schema.Attribute.String;
  };
}

export interface DynamicServiceContentImageGallary
  extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_service_content_image_gallaries';
  info: {
    displayName: 'Image Gallary';
  };
  attributes: {
    imageGallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface DynamicServiceContentKeyResult extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_service_content_key_results';
  info: {
    displayName: 'Key Result';
  };
  attributes: {
    heading: Schema.Attribute.String;
    paragraph: Schema.Attribute.Text;
    result_cards: Schema.Attribute.Component<'common-component.cards', true>;
  };
}

export interface DynamicServiceContentProjectKeyGoals
  extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_service_content_project_key_goals';
  info: {
    displayName: 'Project key  goals';
  };
  attributes: {
    bulletType: Schema.Attribute.String;
    goals_list: Schema.Attribute.Component<'common-component.list', true>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface DynamicServiceContentServiceName
  extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_service_content_service_names';
  info: {
    displayName: 'Service Name';
  };
  attributes: {
    breadcrumbs: Schema.Attribute.String;
    button_slug: Schema.Attribute.String;
    button_text: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface DynamicServiceContentServiceProjectOverview
  extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_service_content_service_project_overviews';
  info: {
    displayName: 'Service Project Overview';
  };
  attributes: {
    box_info_heading: Schema.Attribute.String;
    bulletType: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    list: Schema.Attribute.Component<'common-component.list', true>;
    paragraph: Schema.Attribute.Blocks;
    projectInfo: Schema.Attribute.Component<
      'common-component.project-info',
      true
    >;
    subheading: Schema.Attribute.String;
  };
}

export interface DynamicServiceContentSolutionProvided
  extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_service_content_solution_provideds';
  info: {
    displayName: 'Solution Provided';
  };
  attributes: {
    heading: Schema.Attribute.String;
    paragraphs: Schema.Attribute.Component<'common-component.paragraphs', true>;
    solutionCards: Schema.Attribute.Component<'common-component.cards', true>;
  };
}

export interface FaqTitleFaqTitle extends Struct.ComponentSchema {
  collectionName: 'components_faq_title_faq_titles';
  info: {
    displayName: 'faq_title';
  };
  attributes: {
    faq_title: Schema.Attribute.String;
  };
}

export interface FaqFaq extends Struct.ComponentSchema {
  collectionName: 'components_faq_faqs';
  info: {
    displayName: 'Faq';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface FaqServiceFaq extends Struct.ComponentSchema {
  collectionName: 'components_faq_service_faqs';
  info: {
    displayName: 'service_faq';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HowToChooseAppeakHowToChooseAppeak
  extends Struct.ComponentSchema {
  collectionName: 'components_how_to_choose_appeak_how_to_choose_appeaks';
  info: {
    displayName: 'how_to_choose_appeak';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface QuestionQuestion extends Struct.ComponentSchema {
  collectionName: 'components_question_questions';
  info: {
    displayName: 'Question';
  };
  attributes: {
    Question: Schema.Attribute.String;
  };
}

export interface ReasonsReason extends Struct.ComponentSchema {
  collectionName: 'components_reasons_reasons';
  info: {
    displayName: 'reason';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WhyCityChooseAppeakWhyCityChooseAppeak
  extends Struct.ComponentSchema {
  collectionName: 'components_why_city_choose_appeak_why_city_choose_appeaks';
  info: {
    displayName: 'why_city_choose_appeak';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'appeak-service-for-technology.appeak-service-for-technology': AppeakServiceForTechnologyAppeakServiceForTechnology;
      'benefits.benefit': BenefitsBenefit;
      'benefits.benefit-of-appeak': BenefitsBenefitOfAppeak;
      'blogs.blog-content': BlogsBlogContent;
      'blogs.blog-description': BlogsBlogDescription;
      'blogs.headered-round-bullet-list': BlogsHeaderedRoundBulletList;
      'common-component.cards': CommonComponentCards;
      'common-component.heading': CommonComponentHeading;
      'common-component.list': CommonComponentList;
      'common-component.paragraphs': CommonComponentParagraphs;
      'common-component.project-info': CommonComponentProjectInfo;
      'dynamic-service-content.conclusion': DynamicServiceContentConclusion;
      'dynamic-service-content.image-gallary': DynamicServiceContentImageGallary;
      'dynamic-service-content.key-result': DynamicServiceContentKeyResult;
      'dynamic-service-content.project-key-goals': DynamicServiceContentProjectKeyGoals;
      'dynamic-service-content.service-name': DynamicServiceContentServiceName;
      'dynamic-service-content.service-project-overview': DynamicServiceContentServiceProjectOverview;
      'dynamic-service-content.solution-provided': DynamicServiceContentSolutionProvided;
      'faq-title.faq-title': FaqTitleFaqTitle;
      'faq.faq': FaqFaq;
      'faq.service-faq': FaqServiceFaq;
      'how-to-choose-appeak.how-to-choose-appeak': HowToChooseAppeakHowToChooseAppeak;
      'question.question': QuestionQuestion;
      'reasons.reason': ReasonsReason;
      'why-city-choose-appeak.why-city-choose-appeak': WhyCityChooseAppeakWhyCityChooseAppeak;
    }
  }
}
