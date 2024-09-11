namespace Terrasoft.Core.Process.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;

	#region Class: DfcUserTaskCalcInstPayment

	[DesignModeProperty(Name = "DfcNumberOfPayments", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "f45f19576fd24527805fc067a065798f", CaptionResourceItem = "Parameters.DfcNumberOfPayments.Caption", DescriptionResourceItem = "Parameters.DfcNumberOfPayments.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "DfcInstPayment", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "f45f19576fd24527805fc067a065798f", CaptionResourceItem = "Parameters.DfcInstPayment.Caption", DescriptionResourceItem = "Parameters.DfcInstPayment.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "DfcPaymentFrequency", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "f45f19576fd24527805fc067a065798f", CaptionResourceItem = "Parameters.DfcPaymentFrequency.Caption", DescriptionResourceItem = "Parameters.DfcPaymentFrequency.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "DfcPrincipal", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "f45f19576fd24527805fc067a065798f", CaptionResourceItem = "Parameters.DfcPrincipal.Caption", DescriptionResourceItem = "Parameters.DfcPrincipal.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "DfcRate", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "f45f19576fd24527805fc067a065798f", CaptionResourceItem = "Parameters.DfcRate.Caption", DescriptionResourceItem = "Parameters.DfcRate.Caption", UseSolutionStorage = true)]
	/// <exclude/>
	public partial class DfcUserTaskCalcInstPayment : ProcessUserTask
	{

		#region Constructors: Public

		public DfcUserTaskCalcInstPayment(UserConnection userConnection)
			: base(userConnection) {
			SchemaUId = new Guid("f45f1957-6fd2-4527-805f-c067a065798f");
		}

		#endregion

		#region Properties: Public

		public virtual Decimal DfcNumberOfPayments {
			get;
			set;
		}

		public virtual Decimal DfcInstPayment {
			get;
			set;
		}

		public virtual Guid DfcPaymentFrequency {
			get;
			set;
		}

		public virtual Decimal DfcPrincipal {
			get;
			set;
		}

		public virtual Decimal DfcRate {
			get;
			set;
		}

		#endregion

		#region Methods: Public

		public override void WritePropertiesData(DataWriter writer) {
			writer.WriteStartObject(Name);
			base.WritePropertiesData(writer);
			if (Status == Core.Process.ProcessStatus.Inactive) {
				writer.WriteFinishObject();
				return;
			}
			if (UseFlowEngineMode) {
				if (!HasMapping("DfcNumberOfPayments")) {
					writer.WriteValue("DfcNumberOfPayments", DfcNumberOfPayments, 0m);
				}
			}
			if (UseFlowEngineMode) {
				if (!HasMapping("DfcInstPayment")) {
					writer.WriteValue("DfcInstPayment", DfcInstPayment, 0m);
				}
			}
			if (UseFlowEngineMode) {
				if (!HasMapping("DfcPaymentFrequency")) {
					writer.WriteValue("DfcPaymentFrequency", DfcPaymentFrequency, Guid.Empty);
				}
			}
			if (UseFlowEngineMode) {
				if (!HasMapping("DfcPrincipal")) {
					writer.WriteValue("DfcPrincipal", DfcPrincipal, 0m);
				}
			}
			if (UseFlowEngineMode) {
				if (!HasMapping("DfcRate")) {
					writer.WriteValue("DfcRate", DfcRate, 0m);
				}
			}
			writer.WriteFinishObject();
		}

		#endregion

		#region Methods: Protected

		protected override void ApplyPropertiesDataValues(DataReader reader) {
			base.ApplyPropertiesDataValues(reader);
			switch (reader.CurrentName) {
				case "DfcNumberOfPayments":
					if (!UseFlowEngineMode) {
						break;
					}
					DfcNumberOfPayments = reader.GetValue<System.Decimal>();
				break;
				case "DfcInstPayment":
					if (!UseFlowEngineMode) {
						break;
					}
					DfcInstPayment = reader.GetValue<System.Decimal>();
				break;
				case "DfcPaymentFrequency":
					if (!UseFlowEngineMode) {
						break;
					}
					DfcPaymentFrequency = reader.GetGuidValue();
				break;
				case "DfcPrincipal":
					if (!UseFlowEngineMode) {
						break;
					}
					DfcPrincipal = reader.GetValue<System.Decimal>();
				break;
				case "DfcRate":
					if (!UseFlowEngineMode) {
						break;
					}
					DfcRate = reader.GetValue<System.Decimal>();
				break;
			}
		}

		#endregion

	}

	#endregion

}

