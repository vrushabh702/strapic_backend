import type { Schema, Struct } from '@strapi/strapi';

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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
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
    }
  }
}
