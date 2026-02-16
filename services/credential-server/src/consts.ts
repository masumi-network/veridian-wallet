export const QVI_NAME = "qvi";
export const ISSUER_NAME = "issuer";
export const QVI_SCHEMA_SAID = "EBfdlu8R27Fbx-ehrqwImnK-8Cm79sqbAQ4MmvEAYqao";
export const LE_SCHEMA_SAID = "ENPXp1vQzRF6JwIuS-mp2U8Uf1MoADoP_GqQ62VsDZWY";
export const NMKR_DEVELOPER_SCHEMA_SAID =
  "ENPRGAeBFxWHIwrc0B1Rab5paCKTZjEbZW6KBvwYVhL8";
export const TEST_CRED_SCHEMA_SAID =
  "EHcl0snRd0MGH347b-WhHc_CkW-QMmk3JUPMa0TXP8vC";
export const MASUMI_DEVELOPER_SCHEMA_SAID =
  "EDXQQnDmDYO4S3SOBIb17WENA8KaPJy46m9VDpeKzxj_";
export const MASUMI_AGENT_VERIFICATION_SCHEMA_SAID =
  "EBV88FehFeDa1tiFUQxuuVi1QXKOXVpwOc1cdFMCzBlI";
export const ACDC_SCHEMAS_ID = [
  NMKR_DEVELOPER_SCHEMA_SAID,
  TEST_CRED_SCHEMA_SAID,
  MASUMI_DEVELOPER_SCHEMA_SAID,
  MASUMI_AGENT_VERIFICATION_SCHEMA_SAID,
  LE_SCHEMA_SAID,
  QVI_SCHEMA_SAID,
];

export const ACDC_SCHEMAS = [
  {
    id: NMKR_DEVELOPER_SCHEMA_SAID,
    name: "NMKR Developer",
  },
  {
    id: TEST_CRED_SCHEMA_SAID,
    name: "Test Credentials",
  },
  {
    id: MASUMI_DEVELOPER_SCHEMA_SAID,
    name: "Masumi Developer",
  },
  {
    id: MASUMI_AGENT_VERIFICATION_SCHEMA_SAID,
    name: "Masumi Agent Verification",
  },
  {
    id: LE_SCHEMA_SAID,
    name: "Legal Entity vLEI Credential",
  },
  {
    id: QVI_SCHEMA_SAID,
    name: "Qualified vLEI Issuer Credential",
  },
];
