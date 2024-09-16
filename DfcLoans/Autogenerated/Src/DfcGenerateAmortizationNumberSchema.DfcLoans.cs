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

	#region Class: DfcGenerateAmortizationNumber

	[DesignModeProperty(Name = "DfcAmortizationNumberString", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "0d2112bf476a4e1ea9bc5dd1e5c9c6ee", CaptionResourceItem = "Parameters.DfcAmortizationNumberString.Caption", DescriptionResourceItem = "Parameters.DfcAmortizationNumberString.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "DfcPeriodCount", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "0d2112bf476a4e1ea9bc5dd1e5c9c6ee", CaptionResourceItem = "Parameters.DfcPeriodCount.Caption", DescriptionResourceItem = "Parameters.DfcPeriodCount.Caption", UseSolutionStorage = true)]
	/// <exclude/>
	public partial class DfcGenerateAmortizationNumber : ProcessUserTask
	{

		#region Constructors: Public

		public DfcGenerateAmortizationNumber(UserConnection userConnection)
			: base(userConnection) {
			SchemaUId = new Guid("0d2112bf-476a-4e1e-a9bc-5dd1e5c9c6ee");
		}

		#endregion

		#region Properties: Public

		public virtual string DfcAmortizationNumberString {
			get;
			set;
		}

		public virtual int DfcPeriodCount {
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
				if (!HasMapping("DfcAmortizationNumberString")) {
					writer.WriteValue("DfcAmortizationNumberString", DfcAmortizationNumberString, null);
				}
			}
			if (UseFlowEngineMode) {
				if (!HasMapping("DfcPeriodCount")) {
					writer.WriteValue("DfcPeriodCount", DfcPeriodCount, 0);
				}
			}
			writer.WriteFinishObject();
		}

		#endregion

		#region Methods: Protected

		protected override void ApplyPropertiesDataValues(DataReader reader) {
			base.ApplyPropertiesDataValues(reader);
			switch (reader.CurrentName) {
				case "DfcAmortizationNumberString":
					if (!UseFlowEngineMode) {
						break;
					}
					DfcAmortizationNumberString = reader.GetStringValue();
				break;
				case "DfcPeriodCount":
					if (!UseFlowEngineMode) {
						break;
					}
					DfcPeriodCount = reader.GetIntValue();
				break;
			}
		}

		#endregion

	}

	#endregion

}

