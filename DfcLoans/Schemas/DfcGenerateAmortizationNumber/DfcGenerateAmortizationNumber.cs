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

	/// <exclude/>
	public partial class DfcGenerateAmortizationNumber
	{

		#region Methods: Protected

		protected override bool InternalExecute(ProcessExecutingContext context) {
			string numeroTexto = DfcPeriodCount.ToString();
            string numeroTextoResult = "A";
            numeroTextoResult = numeroTextoResult + numeroTexto.PadLeft(5, '0');
            DfcAmortizationNumberString = numeroTextoResult;
          
			return true;
		}

		#endregion

		#region Methods: Public

		public override bool CompleteExecuting(params object[] parameters) {
			return base.CompleteExecuting(parameters);
		}

		public override void CancelExecuting(params object[] parameters) {
			base.CancelExecuting(parameters);
		}

		public override string GetExecutionData() {
			return string.Empty;
		}

		public override ProcessElementNotification GetNotificationData() {
			return base.GetNotificationData();
		}

		#endregion

	}

	#endregion

}
