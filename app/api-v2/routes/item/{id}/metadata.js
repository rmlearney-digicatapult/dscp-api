const { getMetadataResponse } = require('../../../../util/appUtil')
const { LEGACY_METADATA_KEY } = require('../../../../env')

module.exports = function () {
  const doc = {
    GET: async function (req, res) {
      getMetadataResponse(req.params.id, LEGACY_METADATA_KEY, res)
    },
  }

  doc.GET.apiDoc = {
    summary: 'Get metadata with legacy key',
    parameters: [
      {
        description: 'Id of the item',
        in: 'path',
        required: true,
        name: 'id',
        allowEmptyValue: true,
      },
    ],
    responses: {
      200: {
        description: 'Return legacy metadata',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/LegacyMetadata',
            },
          },
        },
      },
      default: {
        description: 'An error occurred',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/responses/Error',
            },
          },
        },
      },
    },
    security: [{ bearerAuth: [] }],
    tags: ['item'],
  }

  return doc
}
