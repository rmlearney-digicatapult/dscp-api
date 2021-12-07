const { PORT, API_VERSION, API_MAJOR_VERSION } = require('../env')

const apiDoc = {
  openapi: '3.0.3',
  info: {
    title: 'ApiService',
    version: API_VERSION,
  },
  servers: [
    {
      url: `http://localhost:${PORT}/${API_MAJOR_VERSION}`,
    },
  ],
  components: {
    responses: {
      NotFoundError: {
        description: 'This resource cannot be found',
      },
      BadRequestError: {
        description: 'The request is invalid',
      },
      UnauthorizedError: {
        description: 'Access token is missing or invalid',
      },
      Error: {
        description: 'An error occurred',
      },
    },
    schemas: {
      AuthToken: {
        type: 'object',
        properties: {
          access_token: {
            description: 'authentication token',
            type: 'string',
          },
          expires_in: {
            description: 'expiry delta time in milliseconds',
            type: 'number',
          },
          token_type: {
            description: 'type of the authentication token',
            type: 'string',
          },
        },
      },
      Item: {
        type: 'object',
        properties: {
          id: {
            description: 'id of the item',
            type: 'number',
          },
          owner: {
            description: 'owner token of the item',
            type: 'string',
          },
          creator: {
            description: 'creator token of the item',
            type: 'string',
          },
          created_at: {
            description: 'block number the item was created at',
            type: 'number',
          },
          destroyed: {
            description: 'block number the item was destroyed',
            type: 'number',
          },
          parents: {
            description: 'parents of the item',
            type: 'array',
          },
          children: {
            description: 'children of the item',
            type: 'array',
          },
          metadata_keys: {
            description: 'metadata keys of the item',
            type: 'array',
          },
        },
        required: ['id', 'owner', 'creator', 'created_at', 'destroyed', 'parents', 'children', 'metadata'],
      },
      LastToken: {
        type: 'object',
        properties: {
          id: {
            description: 'id of the token',
            type: 'number',
          },
        },
        required: ['id'],
      },
      Member: {
        type: 'object',
        properties: {
          address: {
            description: 'token of the member',
            type: 'string',
          },
        },
        required: ['address'],
      },
      MetadataNone: {
        type: 'object',
        properties: {
          key: {
            description: 'key of the metadata',
            type: 'string',
          },
          none: {
            description: 'none value of the metadata',
            type: 'null',
          },
        },
        required: ['key', 'metadata'],
      },
      MetadataFile: {
        type: 'object',
        properties: {
          key: {
            description: 'key of the metadata',
            type: 'string',
          },
          file: {
            description: 'file value of the metadata',
            type: 'string',
          },
        },
        required: ['key', 'metadata'],
      },
      MetadataLiteral: {
        type: 'object',
        properties: {
          key: {
            description: 'key of the metadata',
            type: 'string',
          },
          literal: {
            description: 'literal value of the metadata',
            type: 'string',
          },
        },
        required: ['key', 'metadata'],
      },
      RunProcessMintedToken: {
        description: 'minted token',
        type: 'number',
      },
      RunProcessMessage: {
        description: 'minted token',
        type: 'object',
        properties: {
          message: {
            description: 'Message',
            type: 'string',
          },
        },
      },
      Input: {
        description: 'Input token id',
        type: 'number',
      },
      Output: {
        description: 'Output objects that describe tokens to be created by running this process',
        type: 'object',
        properties: {
          owner: {
            description: 'Owner of the run process',
            type: 'string',
          },
          metadata: {
            description: 'Output metadata from the run process results',
            type: 'object',
          },
        },
      },
    },
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },

  paths: {},
}

module.exports = apiDoc
