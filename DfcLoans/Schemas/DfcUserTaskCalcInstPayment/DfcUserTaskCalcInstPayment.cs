namespace Terrasoft.Core.Process.Configuration
{

	using System;
	using System.Collections.Generic;
    using System.ServiceModel;
    using System.ServiceModel.Web;
    using System.ServiceModel.Activation;
	using System.Collections.ObjectModel;
    using System.Collections.Generic;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
    using Terrasoft.Core.Factories;
	using Terrasoft.Core.Process;

	#region Class: DfcUserTaskCalcInstPayment

	/// <exclude/>
	public partial class DfcUserTaskCalcInstPayment
	{

		#region Methods: Protected

		protected override bool InternalExecute(ProcessExecutingContext context) {
			// IMPORTANT: When implementing long-running operations, it is crucial to
			// enable timely and responsive cancellation. To achieve this, ensure that your code is designed to
			// respond appropriately to cancellation requests using the context.CancellationToken mechanism.
			// For more detailed information and examples, please, refer to our documentation.

                        // Initialize variables for clarity
            UserConnection userConnection = this.UserConnection;
            decimal principal = DfcPrincipal;
            decimal rate = DfcRate;
            decimal numberOfPayments = DfcNumberOfPayments;
            string paymentFrequencyName = string.Empty;
          
            // Monthly payment formula M = P * r/(1+r)ˆ-n
			// labPayment = (decimal)(DfcPrincipal * (labRate)/(1 - (decimal)Math.Pow((double)(1+labRate), -1 * DfcNumberOfPayments)));


            // Example using Terrasoft.Core.Entities.EntitySchemaQuery
            var esq = new EntitySchemaQuery(userConnection.EntitySchemaManager, "DfcPaymentFrequency");
            esq.AddColumn("Name");
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Id", DfcPaymentFrequency));
          
            var entity = esq.GetEntity(userConnection, DfcPaymentFrequency);
            
            if (entity != null)
            {
              paymentFrequencyName = entity.GetTypedColumnValue<string>("Name");
              // Now you can use PaymentFrequencyName
            }

          // Calculate different payment frequencies
            switch (paymentFrequencyName)
            {
                case "Monthly":
                    DfcInstPayment = CalculateMonthlyPayment(principal, rate, numberOfPayments);
                    break;
                case "Quaterly":
                    DfcInstPayment = CalculateQuarterlyPayment(principal, rate, numberOfPayments);
                    break;
                case "Annually":
                    DfcInstPayment = CalculateAnnualPayment(principal, rate, numberOfPayments);
                    break;
              case "Semi-Annually":
                    DfcInstPayment = CalculateSemiAnnualPayment(principal, rate, numberOfPayments);
                    break;
                case "Weekly":
                    DfcInstPayment = CalculateWeeklyPayment(principal, rate, numberOfPayments);
                    break;
                default:
                    throw new ArgumentException($"Unsupported payment frequency: {DfcPaymentFrequency}");
            }
          
			return true;
		}

		#endregion

        #region Payment Calculation Methods

        private decimal CalculateMonthlyPayment(decimal principal, decimal rate, decimal numberOfPayments)
        {
            // Monthly payment formula M = P * r / (1 - (1 + r)^-n)
            decimal monthlyRate = rate / 12 / 100; // Convert annual rate to monthly rate
            decimal payment = principal * (monthlyRate / (1 - (decimal)Math.Pow((double)(1 + monthlyRate), (double)-numberOfPayments)));
            return Math.Round(payment,2);
        }

        private decimal CalculateQuarterlyPayment(decimal principal, decimal rate, decimal numberOfPayments)
        {
            // Quarterly payment formula
            decimal quarterlyRate = rate / 4 / 100; // Convert annual rate to quarterly rate
            decimal payment = principal * (quarterlyRate / (1 - (decimal)Math.Pow((double)(1 + quarterlyRate), (double)-numberOfPayments)));
            return  Math.Round(payment,2);
        }

        private decimal CalculateAnnualPayment(decimal principal, decimal rate, decimal numberOfPayments)
        {
            // Annual payment formula (lump sum)
            decimal payment = principal * (1 + rate / 100 * numberOfPayments);
            return Math.Round(payment,2);
        }

        private decimal CalculateSemiAnnualPayment(decimal principal, decimal rate, decimal numberOfPayments)
        {
            // Semi-Annual payment formula 
            decimal semiAnnualRate = rate / 2 / 100; // Convert annual rate to semiannual rate
            decimal payment = principal * (semiAnnualRate / (1 - (decimal)Math.Pow((double)(1 + semiAnnualRate), (double)-numberOfPayments)));
            return Math.Round(payment,2);
        }

        private decimal CalculateWeeklyPayment(decimal principal, decimal rate, decimal numberOfPayments)
        {
            // Weekly payment formula
            decimal weeklyRate = rate / 52 / 100; // Convert annual rate to weekly rate
            decimal payment = principal * (weeklyRate / (1 - (decimal)Math.Pow((double)(1 + weeklyRate), (double)-numberOfPayments)));
            return Math.Round(payment,2);
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

