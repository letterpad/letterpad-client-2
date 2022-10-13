export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Author = {
  __typename?: 'Author';
  accessToken?: Maybe<Scalars['String']>;
  analytics_id?: Maybe<Scalars['Int']>;
  analytics_uuid?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  company_name?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  first_post_published?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  occupation?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Permissions>>;
  profile_updated?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Role>;
  settings_updated?: Maybe<Scalars['Boolean']>;
  social?: Maybe<Social>;
  username: Scalars['String'];
  verified?: Maybe<Scalars['Boolean']>;
};

export type AuthorResponse = Author | Exception | Failed | NotFound | UnAuthorized;

export type CreateDomainResponse = Domain | DomainError;

export type CreatePostResponse = Post | PostError;

export type DeleteAuthorResponse = {
  __typename?: 'DeleteAuthorResponse';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type DeleteTagsResponse = DeleteTagsResult | TagsError;

export type DeleteTagsResult = {
  __typename?: 'DeleteTagsResult';
  ok: Scalars['Boolean'];
};

export type Domain = {
  __typename?: 'Domain';
  id: Scalars['Int'];
  mapped?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  ssl?: Maybe<Scalars['Boolean']>;
};

export type DomainError = LetterpadError & {
  __typename?: 'DomainError';
  message: Scalars['String'];
};

export type DomainNotFound = LetterpadError & {
  __typename?: 'DomainNotFound';
  message: Scalars['String'];
};

export type DomainResponse = Domain | DomainNotFound;

export type EditTaxResponse = {
  __typename?: 'EditTaxResponse';
  ok: Scalars['Boolean'];
};

export type Email = {
  __typename?: 'Email';
  body: Scalars['String'];
  subject: Scalars['String'];
  template_id: Scalars['String'];
};

export type EmailError = LetterpadError & {
  __typename?: 'EmailError';
  message: Scalars['String'];
};

export type EmailResponse = Email | EmailError;

export type Error = {
  __typename?: 'Error';
  message?: Maybe<Scalars['String']>;
  path: Scalars['String'];
};

export type Exception = LetterpadError & {
  __typename?: 'Exception';
  message: Scalars['String'];
};

export type Failed = LetterpadError & {
  __typename?: 'Failed';
  message: Scalars['String'];
  type?: Maybe<Failed>;
};

export type Forbidden = LetterpadError & {
  __typename?: 'Forbidden';
  message: Scalars['String'];
  type?: Maybe<Failed>;
};

export type ForgotPasswordResponse = {
  __typename?: 'ForgotPasswordResponse';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type Image = {
  __typename?: 'Image';
  height?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type InputAuthor = {
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  company_name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  first_post_published?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  occupation?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  profile_updated?: InputMaybe<Scalars['Boolean']>;
  roleId?: InputMaybe<Scalars['Int']>;
  settings_updated?: InputMaybe<Scalars['Boolean']>;
  social?: InputMaybe<InputSocial>;
  username?: InputMaybe<Scalars['String']>;
};

export type InputCreateAuthor = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  setting?: InputMaybe<SettingInputType>;
  token: Scalars['String'];
  username: Scalars['String'];
};

export type InputCreatePost = {
  cover_image?: InputMaybe<InputImage>;
  excerpt?: InputMaybe<Scalars['String']>;
  featured?: InputMaybe<Scalars['Boolean']>;
  html?: InputMaybe<Scalars['String']>;
  page_data?: InputMaybe<Scalars['String']>;
  page_type?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<PostStatusOptions>;
  tags?: InputMaybe<Array<InputMaybe<TagsInputType>>>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<PostTypes>;
};

export type InputDomain = {
  mapped?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  ssl?: InputMaybe<Scalars['Boolean']>;
};

export type InputImage = {
  height?: InputMaybe<Scalars['Int']>;
  src: Scalars['String'];
  width?: InputMaybe<Scalars['Int']>;
};

export type InputNavigation = {
  label: Scalars['String'];
  original_name: Scalars['String'];
  slug: Scalars['String'];
  type: NavigationType;
};

export type InputSocial = {
  facebook?: InputMaybe<Scalars['String']>;
  github?: InputMaybe<Scalars['String']>;
  instagram?: InputMaybe<Scalars['String']>;
  linkedin?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
};

export type InputTags = {
  name: Scalars['String'];
  old_name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type InputUpdateMedia = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
};

export type InputUpdatePost = {
  cover_image?: InputMaybe<InputImage>;
  excerpt?: InputMaybe<Scalars['String']>;
  featured?: InputMaybe<Scalars['Boolean']>;
  html?: InputMaybe<Scalars['String']>;
  html_draft?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  page_data?: InputMaybe<Scalars['String']>;
  page_type?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['Date']>;
  scheduledAt?: InputMaybe<Scalars['Date']>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<PostStatusOptions>;
  tags?: InputMaybe<Array<TagsInputType>>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<PostTypes>;
  updatedAt?: InputMaybe<Scalars['Date']>;
};

export type InputUpdateSubscriber = {
  secret_id?: InputMaybe<Scalars['String']>;
  verified?: InputMaybe<Scalars['Boolean']>;
};

export type InvalidArguments = LetterpadError & {
  __typename?: 'InvalidArguments';
  message: Scalars['String'];
};

export type LetterpadError = {
  message: Scalars['String'];
};

export type LetterpadPostFilters = {
  slug: Scalars['String'];
  username: Scalars['String'];
};

export type LoginData = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginError = LetterpadError & {
  __typename?: 'LoginError';
  message: Scalars['String'];
};

export type LoginResponse = Author | LoginError;

export type Media = {
  __typename?: 'Media';
  authorId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['Date'];
  description?: Maybe<Scalars['String']>;
  height: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['String'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

export type MediaDeleteResponse = MediaDeleteResult | MediaError;

export type MediaDeleteResult = {
  __typename?: 'MediaDeleteResult';
  ok: Scalars['Boolean'];
};

export type MediaError = LetterpadError & {
  __typename?: 'MediaError';
  message: Scalars['String'];
};

export type MediaFilters = {
  authorId?: InputMaybe<Scalars['Int']>;
  cursor?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type MediaNode = {
  __typename?: 'MediaNode';
  count: Scalars['Int'];
  rows: Array<Media>;
};

export type MediaUpdateResponse = MediaError | MediaUpdateResult;

export type MediaUpdateResult = {
  __typename?: 'MediaUpdateResult';
  ok: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addSubscriber?: Maybe<SubscribersAddResult>;
  createAuthor?: Maybe<AuthorResponse>;
  createOrUpdateDomain: UpdateDomainResponse;
  createPost: CreatePostResponse;
  deleteAuthor?: Maybe<DeleteAuthorResponse>;
  deleteMedia?: Maybe<MediaDeleteResponse>;
  deleteTags: DeleteTagsResponse;
  forgotPassword: ForgotPasswordResponse;
  login?: Maybe<LoginResponse>;
  removeDomain: RemoveDomainResponse;
  resetPassword: ForgotPasswordResponse;
  updateAuthor?: Maybe<AuthorResponse>;
  updateMedia?: Maybe<MediaUpdateResponse>;
  updateOptions?: Maybe<SettingResponse>;
  updatePost: UpdatePostResponse;
  updateSubscriber: SubscribersUpdateResult;
  updateTags: UpdateTagsResponse;
};

export type MutationAddSubscriberArgs = {
  email: Scalars['String'];
};

export type MutationCreateAuthorArgs = {
  data: InputCreateAuthor;
};

export type MutationCreateOrUpdateDomainArgs = {
  data: InputDomain;
};

export type MutationCreatePostArgs = {
  data?: InputMaybe<InputCreatePost>;
};

export type MutationDeleteMediaArgs = {
  ids: Array<Scalars['Int']>;
};

export type MutationDeleteTagsArgs = {
  name: Scalars['String'];
};

export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};

export type MutationLoginArgs = {
  data?: InputMaybe<LoginData>;
};

export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  token: Scalars['String'];
};

export type MutationUpdateAuthorArgs = {
  author: InputAuthor;
};

export type MutationUpdateMediaArgs = {
  data: InputUpdateMedia;
};

export type MutationUpdateOptionsArgs = {
  options: Array<SettingInputType>;
};

export type MutationUpdatePostArgs = {
  data?: InputMaybe<InputUpdatePost>;
};

export type MutationUpdateSubscriberArgs = {
  data: InputUpdateSubscriber;
};

export type MutationUpdateTagsArgs = {
  data?: InputMaybe<InputTags>;
};

export type Navigation = {
  __typename?: 'Navigation';
  label: Scalars['String'];
  original_name: Scalars['String'];
  slug: Scalars['String'];
  type: NavigationType;
};

export enum NavigationType {
  Custom = 'custom',
  Page = 'page',
  Tag = 'tag',
}

export type NotFound = LetterpadError & {
  __typename?: 'NotFound';
  message: Scalars['String'];
};

export enum Permissions {
  ManageAllPosts = 'MANAGE_ALL_POSTS',
  ManageOwnPosts = 'MANAGE_OWN_POSTS',
  ManageSettings = 'MANAGE_SETTINGS',
  ManageUsers = 'MANAGE_USERS',
  ReadOnlyPosts = 'READ_ONLY_POSTS',
}

export type Post = {
  __typename?: 'Post';
  author?: Maybe<AuthorResponse>;
  cover_image: Image;
  createdAt: Scalars['Date'];
  excerpt?: Maybe<Scalars['String']>;
  featured: Scalars['Boolean'];
  html?: Maybe<Scalars['String']>;
  html_draft?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  page_data?: Maybe<Scalars['String']>;
  page_type?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['Date']>;
  reading_time?: Maybe<Scalars['String']>;
  scheduledAt?: Maybe<Scalars['Date']>;
  slug?: Maybe<Scalars['String']>;
  status: PostStatusOptions;
  tags?: Maybe<TagsResponse>;
  title: Scalars['String'];
  type: PostTypes;
  updatedAt: Scalars['Date'];
};

export type PostCountsByStatus = {
  __typename?: 'PostCountsByStatus';
  drafts: Scalars['Int'];
  published: Scalars['Int'];
};

export type PostError = LetterpadError & {
  __typename?: 'PostError';
  message: Scalars['String'];
};

export type PostFilters = {
  featured?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  previewHash?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<PostStatusOptions>;
  type?: InputMaybe<PostTypes>;
};

export type PostResponse = Exception | InvalidArguments | NotFound | Post | UnAuthorized;

export enum PostStatusOptions {
  Draft = 'draft',
  Published = 'published',
  Trashed = 'trashed',
}

export enum PostTypes {
  Page = 'page',
  Post = 'post',
}

export type PostsFilters = {
  author?: InputMaybe<Scalars['String']>;
  cursor?: InputMaybe<Scalars['Int']>;
  featured?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  page_type?: InputMaybe<Scalars['String']>;
  previewHash?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<SortBy>;
  status?: InputMaybe<PostStatusOptions>;
  tag?: InputMaybe<Scalars['String']>;
  tagSlug?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<PostTypes>;
};

export type PostsNode = {
  __typename?: 'PostsNode';
  count: Scalars['Int'];
  rows: Array<Post>;
};

export type PostsResponse = Exception | PostsNode | UnAuthorized;

export type Query = {
  __typename?: 'Query';
  domain: DomainResponse;
  email: EmailResponse;
  emails: Array<Maybe<Email>>;
  letterpadLatestPost: PostResponse;
  letterpadLatestPosts: PostsResponse;
  me?: Maybe<AuthorResponse>;
  media: MediaNode;
  post: PostResponse;
  posts: PostsResponse;
  settings: SettingResponse;
  sitemap: SiteMapResponse;
  stats?: Maybe<StatsResponse>;
  subscriber: SubscriberResponse;
  subscribers: SubscribersNode;
  tag: TagResponse;
  tags: TagsResponse;
};

export type QueryEmailArgs = {
  template_id?: InputMaybe<Scalars['String']>;
};

export type QueryLetterpadLatestPostArgs = {
  filters?: InputMaybe<LetterpadPostFilters>;
};

export type QueryMediaArgs = {
  filters?: InputMaybe<MediaFilters>;
};

export type QueryPostArgs = {
  filters?: InputMaybe<PostFilters>;
};

export type QueryPostsArgs = {
  filters?: InputMaybe<PostsFilters>;
};

export type QuerySubscriberArgs = {
  subscriber_id?: InputMaybe<Scalars['Int']>;
};

export type QuerySubscribersArgs = {
  author_id?: InputMaybe<Scalars['Int']>;
};

export type QueryTagArgs = {
  slug: Scalars['String'];
};

export type QueryTagsArgs = {
  filters?: InputMaybe<TagsFilters>;
};

export type RemoveDomainResponse = {
  __typename?: 'RemoveDomainResponse';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type Response = {
  __typename?: 'Response';
  errors?: Maybe<Array<Error>>;
  ok: Scalars['Boolean'];
  post?: Maybe<Post>;
};

export enum Role {
  Admin = 'ADMIN',
  Author = 'AUTHOR',
  Reader = 'READER',
  Reviewer = 'REVIEWER',
}

export type Setting = {
  __typename?: 'Setting';
  banner?: Maybe<Image>;
  client_token: Scalars['String'];
  cloudinary_key?: Maybe<Scalars['String']>;
  cloudinary_name?: Maybe<Scalars['String']>;
  cloudinary_secret?: Maybe<Scalars['String']>;
  css?: Maybe<Scalars['String']>;
  display_author_info: Scalars['Boolean'];
  id: Scalars['Int'];
  intro_dismissed: Scalars['Boolean'];
  menu: Array<Navigation>;
  show_about_page?: Maybe<Scalars['Boolean']>;
  show_tags_page?: Maybe<Scalars['Boolean']>;
  site_description?: Maybe<Scalars['String']>;
  site_email: Scalars['String'];
  site_favicon?: Maybe<Image>;
  site_footer?: Maybe<Scalars['String']>;
  site_logo?: Maybe<Image>;
  site_tagline?: Maybe<Scalars['String']>;
  site_title: Scalars['String'];
  site_url: Scalars['String'];
  subscribe_embed?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
};

export type SettingError = LetterpadError & {
  __typename?: 'SettingError';
  message: Scalars['String'];
};

export type SettingInputType = {
  banner?: InputMaybe<InputImage>;
  cloudinary_key?: InputMaybe<Scalars['String']>;
  cloudinary_name?: InputMaybe<Scalars['String']>;
  cloudinary_secret?: InputMaybe<Scalars['String']>;
  css?: InputMaybe<Scalars['String']>;
  display_author_info?: InputMaybe<Scalars['Boolean']>;
  intro_dismissed?: InputMaybe<Scalars['Boolean']>;
  menu?: InputMaybe<Array<InputNavigation>>;
  show_about_page?: InputMaybe<Scalars['Boolean']>;
  show_tags_page?: InputMaybe<Scalars['Boolean']>;
  site_description?: InputMaybe<Scalars['String']>;
  site_email?: InputMaybe<Scalars['String']>;
  site_favicon?: InputMaybe<InputImage>;
  site_footer?: InputMaybe<Scalars['String']>;
  site_logo?: InputMaybe<InputImage>;
  site_tagline?: InputMaybe<Scalars['String']>;
  site_title?: InputMaybe<Scalars['String']>;
  site_url?: InputMaybe<Scalars['String']>;
  subscribe_embed?: InputMaybe<Scalars['String']>;
  theme?: InputMaybe<Scalars['String']>;
};

export type SettingResponse = NotFound | Setting | UnAuthorized;

export type SiteMapError = {
  __typename?: 'SiteMapError';
  message?: Maybe<Scalars['String']>;
};

export type SiteMapList = {
  __typename?: 'SiteMapList';
  rows: Array<SiteMapNode>;
};

export type SiteMapNode = {
  __typename?: 'SiteMapNode';
  changefreq?: Maybe<Scalars['String']>;
  lastmod?: Maybe<Scalars['String']>;
  priority: Scalars['Int'];
  route: Scalars['String'];
};

export type SiteMapResponse = SiteMapError | SiteMapList;

export type Social = {
  __typename?: 'Social';
  facebook?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
};

export enum SortBy {
  Asc = 'asc',
  Desc = 'desc',
}

export type Stats = {
  __typename?: 'Stats';
  media: Scalars['Int'];
  pages: PostCountsByStatus;
  posts: PostCountsByStatus;
  tags: Scalars['Int'];
};

export type StatsError = LetterpadError & {
  __typename?: 'StatsError';
  message: Scalars['String'];
};

export type StatsResponse = Stats | StatsError;

export type Subscriber = {
  __typename?: 'Subscriber';
  author_id: Scalars['Int'];
  createdAt: Scalars['Date'];
  email: Scalars['String'];
  id: Scalars['Int'];
  verified: Scalars['Boolean'];
};

export type SubscriberError = {
  __typename?: 'SubscriberError';
  message?: Maybe<Scalars['String']>;
};

export type SubscriberResponse = Subscriber | SubscriberError;

export type SubscribersAddResult = {
  __typename?: 'SubscribersAddResult';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type SubscribersNode = {
  __typename?: 'SubscribersNode';
  count: Scalars['Int'];
  rows: Array<Subscriber>;
};

export type SubscribersUpdateResult = {
  __typename?: 'SubscribersUpdateResult';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type Tag = {
  __typename?: 'Tag';
  name: Scalars['String'];
  posts?: Maybe<PostsResponse>;
  slug: Scalars['String'];
};

export type TagResponse = Exception | Tag;

export type TagResultError = LetterpadError & {
  __typename?: 'TagResultError';
  message: Scalars['String'];
};

export type TagsError = LetterpadError & {
  __typename?: 'TagsError';
  message: Scalars['String'];
};

export type TagsFilters = {
  active?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  suggest?: InputMaybe<Scalars['Boolean']>;
};

export type TagsInputType = {
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type TagsNode = {
  __typename?: 'TagsNode';
  rows: Array<Tag>;
};

export type TagsResponse = Exception | TagsError | TagsNode;

export type UnAuthorized = LetterpadError & {
  __typename?: 'UnAuthorized';
  message: Scalars['String'];
};

export type Unexpected = LetterpadError & {
  __typename?: 'Unexpected';
  message: Scalars['String'];
};

export type UpdateDomainResponse = {
  __typename?: 'UpdateDomainResponse';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UpdatePostResponse = Post | PostError;

export type UpdateTagsResponse = EditTaxResponse | TagsError;

export type AboutQueryQueryVariables = Exact<{ [key: string]: never }>;

export type AboutQueryQuery = {
  __typename?: 'Query';
  me?:
    | {
        __typename: 'Author';
        name: string;
        bio?: string | null;
        occupation?: string | null;
        avatar?: string | null;
        company_name?: string | null;
        analytics_uuid?: string | null;
        social?: {
          __typename?: 'Social';
          twitter?: string | null;
          facebook?: string | null;
          github?: string | null;
          instagram?: string | null;
          linkedin?: string | null;
        } | null;
      }
    | { __typename?: 'Exception' }
    | { __typename?: 'Failed' }
    | { __typename?: 'NotFound' }
    | { __typename?: 'UnAuthorized' }
    | null;
  settings:
    | { __typename?: 'NotFound' }
    | {
        __typename: 'Setting';
        site_footer?: string | null;
        subscribe_embed?: string | null;
        css?: string | null;
        site_title: string;
        site_email: string;
        site_description?: string | null;
        site_tagline?: string | null;
        show_about_page?: boolean | null;
        show_tags_page?: boolean | null;
        theme?: string | null;
        site_url: string;
        site_favicon?: { __typename?: 'Image'; src?: string | null } | null;
        banner?: { __typename?: 'Image'; src?: string | null } | null;
        site_logo?: {
          __typename?: 'Image';
          src?: string | null;
          width?: number | null;
          height?: number | null;
        } | null;
        menu: Array<{
          __typename?: 'Navigation';
          type: NavigationType;
          slug: string;
          label: string;
        }>;
      }
    | { __typename?: 'UnAuthorized' };
};

export type HomeQueryQueryVariables = Exact<{ [key: string]: never }>;

export type HomeQueryQuery = {
  __typename?: 'Query';
  settings:
    | { __typename?: 'NotFound' }
    | {
        __typename: 'Setting';
        site_footer?: string | null;
        subscribe_embed?: string | null;
        css?: string | null;
        site_title: string;
        site_email: string;
        site_description?: string | null;
        site_tagline?: string | null;
        show_about_page?: boolean | null;
        show_tags_page?: boolean | null;
        theme?: string | null;
        site_url: string;
        site_favicon?: { __typename?: 'Image'; src?: string | null } | null;
        banner?: { __typename?: 'Image'; src?: string | null } | null;
        site_logo?: {
          __typename?: 'Image';
          src?: string | null;
          width?: number | null;
          height?: number | null;
        } | null;
        menu: Array<{
          __typename?: 'Navigation';
          type: NavigationType;
          slug: string;
          label: string;
        }>;
      }
    | { __typename?: 'UnAuthorized' };
  me?:
    | {
        __typename: 'Author';
        name: string;
        bio?: string | null;
        occupation?: string | null;
        avatar?: string | null;
        company_name?: string | null;
        analytics_uuid?: string | null;
        social?: {
          __typename?: 'Social';
          twitter?: string | null;
          facebook?: string | null;
          github?: string | null;
          instagram?: string | null;
          linkedin?: string | null;
        } | null;
      }
    | { __typename?: 'Exception' }
    | { __typename?: 'Failed' }
    | { __typename?: 'NotFound' }
    | { __typename?: 'UnAuthorized' }
    | null;
};

export type PageQueryWithHtmlQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;

export type PageQueryWithHtmlQuery = {
  __typename?: 'Query';
  post:
    | { __typename: 'Exception' }
    | { __typename: 'InvalidArguments' }
    | { __typename: 'NotFound' }
    | {
        __typename: 'Post';
        html?: string | null;
        id: number;
        slug?: string | null;
        title: string;
        reading_time?: string | null;
        page_type?: string | null;
        page_data?: string | null;
        type: PostTypes;
        publishedAt?: any | null;
        updatedAt: any;
        excerpt?: string | null;
        author?:
          | {
              __typename: 'Author';
              name: string;
              avatar?: string | null;
              id: number;
              occupation?: string | null;
            }
          | { __typename: 'Exception' }
          | { __typename: 'Failed' }
          | { __typename: 'NotFound' }
          | { __typename: 'UnAuthorized' }
          | null;
        tags?:
          | { __typename?: 'Exception' }
          | { __typename?: 'TagsError' }
          | {
              __typename?: 'TagsNode';
              rows: Array<{ __typename?: 'Tag'; name: string; slug: string }>;
            }
          | null;
        cover_image: { __typename?: 'Image'; src?: string | null };
      }
    | { __typename: 'UnAuthorized' };
  me?:
    | {
        __typename: 'Author';
        name: string;
        bio?: string | null;
        occupation?: string | null;
        avatar?: string | null;
        company_name?: string | null;
        analytics_uuid?: string | null;
        social?: {
          __typename?: 'Social';
          twitter?: string | null;
          facebook?: string | null;
          github?: string | null;
          instagram?: string | null;
          linkedin?: string | null;
        } | null;
      }
    | { __typename?: 'Exception' }
    | { __typename?: 'Failed' }
    | { __typename?: 'NotFound' }
    | { __typename?: 'UnAuthorized' }
    | null;
  settings:
    | { __typename?: 'NotFound' }
    | {
        __typename: 'Setting';
        site_footer?: string | null;
        subscribe_embed?: string | null;
        css?: string | null;
        site_title: string;
        site_email: string;
        site_description?: string | null;
        site_tagline?: string | null;
        show_about_page?: boolean | null;
        show_tags_page?: boolean | null;
        theme?: string | null;
        site_url: string;
        site_favicon?: { __typename?: 'Image'; src?: string | null } | null;
        banner?: { __typename?: 'Image'; src?: string | null } | null;
        site_logo?: {
          __typename?: 'Image';
          src?: string | null;
          width?: number | null;
          height?: number | null;
        } | null;
        menu: Array<{
          __typename?: 'Navigation';
          type: NavigationType;
          slug: string;
          label: string;
        }>;
      }
    | { __typename?: 'UnAuthorized' };
};

export type PreviewQueryQueryVariables = Exact<{
  previewHash?: InputMaybe<Scalars['String']>;
}>;

export type PreviewQueryQuery = {
  __typename?: 'Query';
  post:
    | { __typename: 'Exception' }
    | { __typename: 'InvalidArguments' }
    | { __typename: 'NotFound' }
    | {
        __typename: 'Post';
        html?: string | null;
        id: number;
        slug?: string | null;
        title: string;
        reading_time?: string | null;
        page_type?: string | null;
        page_data?: string | null;
        type: PostTypes;
        publishedAt?: any | null;
        updatedAt: any;
        excerpt?: string | null;
        author?:
          | {
              __typename: 'Author';
              name: string;
              avatar?: string | null;
              id: number;
              occupation?: string | null;
            }
          | { __typename: 'Exception' }
          | { __typename: 'Failed' }
          | { __typename: 'NotFound' }
          | { __typename: 'UnAuthorized' }
          | null;
        tags?:
          | { __typename?: 'Exception' }
          | { __typename?: 'TagsError' }
          | {
              __typename?: 'TagsNode';
              rows: Array<{ __typename?: 'Tag'; name: string; slug: string }>;
            }
          | null;
        cover_image: { __typename?: 'Image'; src?: string | null };
      }
    | { __typename: 'UnAuthorized' };
  me?:
    | {
        __typename: 'Author';
        name: string;
        bio?: string | null;
        occupation?: string | null;
        avatar?: string | null;
        company_name?: string | null;
        analytics_uuid?: string | null;
        social?: {
          __typename?: 'Social';
          twitter?: string | null;
          facebook?: string | null;
          github?: string | null;
          instagram?: string | null;
          linkedin?: string | null;
        } | null;
      }
    | { __typename?: 'Exception' }
    | { __typename?: 'Failed' }
    | { __typename?: 'NotFound' }
    | { __typename?: 'UnAuthorized' }
    | null;
  settings:
    | { __typename?: 'NotFound' }
    | {
        __typename: 'Setting';
        site_footer?: string | null;
        subscribe_embed?: string | null;
        css?: string | null;
        site_title: string;
        site_email: string;
        site_description?: string | null;
        site_tagline?: string | null;
        show_about_page?: boolean | null;
        show_tags_page?: boolean | null;
        theme?: string | null;
        site_url: string;
        site_favicon?: { __typename?: 'Image'; src?: string | null } | null;
        banner?: { __typename?: 'Image'; src?: string | null } | null;
        site_logo?: {
          __typename?: 'Image';
          src?: string | null;
          width?: number | null;
          height?: number | null;
        } | null;
        menu: Array<{
          __typename?: 'Navigation';
          type: NavigationType;
          slug: string;
          label: string;
        }>;
      }
    | { __typename?: 'UnAuthorized' };
};

export type SitemapQueryQueryVariables = Exact<{ [key: string]: never }>;

export type SitemapQueryQuery = {
  __typename?: 'Query';
  sitemap:
    | { __typename: 'SiteMapError'; message?: string | null }
    | {
        __typename: 'SiteMapList';
        rows: Array<{
          __typename?: 'SiteMapNode';
          route: string;
          priority: number;
          lastmod?: string | null;
        }>;
      };
};

export type TagPostsQueryQueryVariables = Exact<{
  tagSlug: Scalars['String'];
}>;

export type TagPostsQueryQuery = {
  __typename?: 'Query';
  posts:
    | { __typename?: 'Exception' }
    | {
        __typename: 'PostsNode';
        count: number;
        rows: Array<{
          __typename?: 'Post';
          id: number;
          title: string;
          slug?: string | null;
          publishedAt?: any | null;
          reading_time?: string | null;
          excerpt?: string | null;
          cover_image: { __typename?: 'Image'; src?: string | null };
          author?:
            | { __typename: 'Author'; name: string; avatar?: string | null }
            | { __typename?: 'Exception' }
            | { __typename?: 'Failed' }
            | { __typename?: 'NotFound' }
            | { __typename?: 'UnAuthorized' }
            | null;
          tags?:
            | { __typename?: 'Exception' }
            | { __typename?: 'TagsError' }
            | {
                __typename?: 'TagsNode';
                rows: Array<{ __typename?: 'Tag'; name: string; slug: string }>;
              }
            | null;
        }>;
      }
    | { __typename?: 'UnAuthorized' };
  tag:
    | { __typename?: 'Exception'; message: string }
    | { __typename?: 'Tag'; name: string; slug: string };
  me?:
    | {
        __typename: 'Author';
        name: string;
        bio?: string | null;
        occupation?: string | null;
        avatar?: string | null;
        company_name?: string | null;
        analytics_uuid?: string | null;
        social?: {
          __typename?: 'Social';
          twitter?: string | null;
          facebook?: string | null;
          github?: string | null;
          instagram?: string | null;
          linkedin?: string | null;
        } | null;
      }
    | { __typename?: 'Exception' }
    | { __typename?: 'Failed' }
    | { __typename?: 'NotFound' }
    | { __typename?: 'UnAuthorized' }
    | null;
  settings:
    | { __typename?: 'NotFound' }
    | {
        __typename: 'Setting';
        site_footer?: string | null;
        subscribe_embed?: string | null;
        css?: string | null;
        site_title: string;
        site_email: string;
        site_description?: string | null;
        site_tagline?: string | null;
        show_about_page?: boolean | null;
        show_tags_page?: boolean | null;
        theme?: string | null;
        site_url: string;
        site_favicon?: { __typename?: 'Image'; src?: string | null } | null;
        banner?: { __typename?: 'Image'; src?: string | null } | null;
        site_logo?: {
          __typename?: 'Image';
          src?: string | null;
          width?: number | null;
          height?: number | null;
        } | null;
        menu: Array<{
          __typename?: 'Navigation';
          type: NavigationType;
          slug: string;
          label: string;
        }>;
      }
    | { __typename?: 'UnAuthorized' };
};

export type TagsQueryQueryVariables = Exact<{ [key: string]: never }>;

export type TagsQueryQuery = {
  __typename?: 'Query';
  tags:
    | { __typename: 'Exception' }
    | { __typename: 'TagsError'; message: string }
    | {
        __typename: 'TagsNode';
        rows: Array<{
          __typename?: 'Tag';
          name: string;
          posts?:
            | { __typename: 'Exception' }
            | { __typename: 'PostsNode'; count: number }
            | { __typename: 'UnAuthorized' }
            | null;
        }>;
      };
  settings:
    | { __typename?: 'NotFound' }
    | {
        __typename: 'Setting';
        site_footer?: string | null;
        subscribe_embed?: string | null;
        css?: string | null;
        site_title: string;
        site_email: string;
        site_description?: string | null;
        site_tagline?: string | null;
        show_about_page?: boolean | null;
        show_tags_page?: boolean | null;
        theme?: string | null;
        site_url: string;
        site_favicon?: { __typename?: 'Image'; src?: string | null } | null;
        banner?: { __typename?: 'Image'; src?: string | null } | null;
        site_logo?: {
          __typename?: 'Image';
          src?: string | null;
          width?: number | null;
          height?: number | null;
        } | null;
        menu: Array<{
          __typename?: 'Navigation';
          type: NavigationType;
          slug: string;
          label: string;
        }>;
      }
    | { __typename?: 'UnAuthorized' };
  me?:
    | {
        __typename: 'Author';
        name: string;
        bio?: string | null;
        occupation?: string | null;
        avatar?: string | null;
        company_name?: string | null;
        analytics_uuid?: string | null;
        social?: {
          __typename?: 'Social';
          twitter?: string | null;
          facebook?: string | null;
          github?: string | null;
          instagram?: string | null;
          linkedin?: string | null;
        } | null;
      }
    | { __typename?: 'Exception' }
    | { __typename?: 'Failed' }
    | { __typename?: 'NotFound' }
    | { __typename?: 'UnAuthorized' }
    | null;
};

export type SettingsFragment = {
  __typename?: 'Query';
  settings:
    | { __typename?: 'NotFound' }
    | {
        __typename: 'Setting';
        site_footer?: string | null;
        subscribe_embed?: string | null;
        css?: string | null;
        site_title: string;
        site_email: string;
        site_description?: string | null;
        site_tagline?: string | null;
        show_about_page?: boolean | null;
        show_tags_page?: boolean | null;
        theme?: string | null;
        site_url: string;
        site_favicon?: { __typename?: 'Image'; src?: string | null } | null;
        banner?: { __typename?: 'Image'; src?: string | null } | null;
        site_logo?: {
          __typename?: 'Image';
          src?: string | null;
          width?: number | null;
          height?: number | null;
        } | null;
        menu: Array<{
          __typename?: 'Navigation';
          type: NavigationType;
          slug: string;
          label: string;
        }>;
      }
    | { __typename?: 'UnAuthorized' };
};

export type MeFragment = {
  __typename?: 'Query';
  me?:
    | {
        __typename: 'Author';
        name: string;
        bio?: string | null;
        occupation?: string | null;
        avatar?: string | null;
        company_name?: string | null;
        analytics_uuid?: string | null;
        social?: {
          __typename?: 'Social';
          twitter?: string | null;
          facebook?: string | null;
          github?: string | null;
          instagram?: string | null;
          linkedin?: string | null;
        } | null;
      }
    | { __typename?: 'Exception' }
    | { __typename?: 'Failed' }
    | { __typename?: 'NotFound' }
    | { __typename?: 'UnAuthorized' }
    | null;
};

export type PageFragmentFragment = {
  __typename: 'Post';
  id: number;
  slug?: string | null;
  title: string;
  reading_time?: string | null;
  page_type?: string | null;
  page_data?: string | null;
  html?: string | null;
  type: PostTypes;
  publishedAt?: any | null;
  updatedAt: any;
  excerpt?: string | null;
  tags?:
    | { __typename?: 'Exception' }
    | { __typename?: 'TagsError' }
    | { __typename?: 'TagsNode'; rows: Array<{ __typename?: 'Tag'; name: string; slug: string }> }
    | null;
  author?:
    | {
        __typename: 'Author';
        id: number;
        name: string;
        avatar?: string | null;
        occupation?: string | null;
      }
    | { __typename?: 'Exception' }
    | { __typename?: 'Failed' }
    | { __typename?: 'NotFound' }
    | { __typename?: 'UnAuthorized' }
    | null;
  cover_image: { __typename?: 'Image'; src?: string | null };
};

export type PostsFragmentFragment = {
  __typename: 'PostsNode';
  count: number;
  rows: Array<{
    __typename?: 'Post';
    id: number;
    title: string;
    slug?: string | null;
    publishedAt?: any | null;
    reading_time?: string | null;
    excerpt?: string | null;
    cover_image: { __typename?: 'Image'; src?: string | null };
    author?:
      | { __typename: 'Author'; name: string; avatar?: string | null }
      | { __typename?: 'Exception' }
      | { __typename?: 'Failed' }
      | { __typename?: 'NotFound' }
      | { __typename?: 'UnAuthorized' }
      | null;
    tags?:
      | { __typename?: 'Exception' }
      | { __typename?: 'TagsError' }
      | { __typename?: 'TagsNode'; rows: Array<{ __typename?: 'Tag'; name: string; slug: string }> }
      | null;
  }>;
};

export type PageQueryQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;

export type PageQueryQuery = {
  __typename?: 'Query';
  post:
    | { __typename: 'Exception' }
    | { __typename: 'InvalidArguments' }
    | { __typename: 'NotFound' }
    | {
        __typename: 'Post';
        id: number;
        slug?: string | null;
        title: string;
        reading_time?: string | null;
        page_type?: string | null;
        page_data?: string | null;
        html?: string | null;
        type: PostTypes;
        publishedAt?: any | null;
        updatedAt: any;
        excerpt?: string | null;
        tags?:
          | { __typename?: 'Exception' }
          | { __typename?: 'TagsError' }
          | {
              __typename?: 'TagsNode';
              rows: Array<{ __typename?: 'Tag'; name: string; slug: string }>;
            }
          | null;
        author?:
          | {
              __typename: 'Author';
              id: number;
              name: string;
              avatar?: string | null;
              occupation?: string | null;
            }
          | { __typename?: 'Exception' }
          | { __typename?: 'Failed' }
          | { __typename?: 'NotFound' }
          | { __typename?: 'UnAuthorized' }
          | null;
        cover_image: { __typename?: 'Image'; src?: string | null };
      }
    | { __typename: 'UnAuthorized' };
};

export type PostsQueryQueryVariables = Exact<{
  tagSlug: Scalars['String'];
}>;

export type PostsQueryQuery = {
  __typename?: 'Query';
  posts:
    | { __typename?: 'Exception' }
    | {
        __typename: 'PostsNode';
        count: number;
        rows: Array<{
          __typename?: 'Post';
          id: number;
          title: string;
          slug?: string | null;
          publishedAt?: any | null;
          reading_time?: string | null;
          excerpt?: string | null;
          cover_image: { __typename?: 'Image'; src?: string | null };
          author?:
            | { __typename: 'Author'; name: string; avatar?: string | null }
            | { __typename?: 'Exception' }
            | { __typename?: 'Failed' }
            | { __typename?: 'NotFound' }
            | { __typename?: 'UnAuthorized' }
            | null;
          tags?:
            | { __typename?: 'Exception' }
            | { __typename?: 'TagsError' }
            | {
                __typename?: 'TagsNode';
                rows: Array<{ __typename?: 'Tag'; name: string; slug: string }>;
              }
            | null;
        }>;
      }
    | { __typename?: 'UnAuthorized' };
};

export type TagsFragment_Exception_Fragment = { __typename?: 'Exception'; message: string };

export type TagsFragment_Tag_Fragment = { __typename?: 'Tag'; name: string; slug: string };

export type TagsFragmentFragment = TagsFragment_Exception_Fragment | TagsFragment_Tag_Fragment;

export type SitemapFragment_SiteMapError_Fragment = {
  __typename: 'SiteMapError';
  message?: string | null;
};

export type SitemapFragment_SiteMapList_Fragment = {
  __typename: 'SiteMapList';
  rows: Array<{
    __typename?: 'SiteMapNode';
    route: string;
    priority: number;
    lastmod?: string | null;
  }>;
};

export type SitemapFragmentFragment =
  | SitemapFragment_SiteMapError_Fragment
  | SitemapFragment_SiteMapList_Fragment;
