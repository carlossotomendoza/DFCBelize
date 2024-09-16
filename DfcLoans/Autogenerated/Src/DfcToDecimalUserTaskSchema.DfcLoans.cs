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

	#region Class: DfcToDecimalUserTask

	[DesignModeProperty(Name = "DfcInteger", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "f5a34d60afa745858b02ff42a7dd22c2", CaptionResourceItem = "Parameters.DfcInteger.Caption", DescriptionResourceItem = "Parameters.DfcInteger.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "DfcDecimalResult", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "f5a34d60afa745858b02ff42a7dd22c2", CaptionResourceItem = "Parameters.DfcDecimalResult.Caption", DescriptionResourceItem = "Parameters.DfcDecimalResult.Caption", UseSolutionStorage = true)]
	/// <exclude/>
	public partial class DfcToDecimalUserTask : ProcessUserTask
	{

		#region Constructors: Public

		public DfcToDecimalUserTask(UserConnection userConnection)
			: base(userConnection) {
			SchemaUId = new Guid("f5a34d60-afa7-4585-8b02-ff42a7dd22c2");
		}

		#endregion

		#region Properties: Public

		public virtual int DfcInteger {
			get;
			set;
		}

		public virtual Decimal DfcDecimalResult {
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
				if (!HasMapping("DfcInteger")) {
					writer.WriteValue("DfcInteger", DfcInteger, 0);
				}
			}
			if (UseFlowEngineMode) {
				if (!HasMapping("DfcDecimalResult")) {
					writer.WriteValue("DfcDecimalResult", DfcDecimalResult, 0m);
				}
			}
			writer.WriteFinishObject();
		}

		#endregion

		#region Methods: Protected

		protected override void ApplyPropertiesDataValues(DataReader reader) {
			base.ApplyPropertiesDataValues(reader);
			switch (reader.CurrentName) {
				case "DfcInteger":
					if (!UseFlowEngineMode) {
						break;
					}
					DfcInteger = reader.GetIntValue();
				break;
				case "DfcDecimalResult":
					if (!UseFlowEngineMode) {
						break;
					}
					DfcDecimalResult = reader.GetValue<System.Decimal>();
				break;
			}
		}

		#endregion

	}

	#endregion

}

