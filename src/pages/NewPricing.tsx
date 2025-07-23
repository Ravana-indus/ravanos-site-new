import Navbar from "@/components/Navbar";
import React, { useEffect } from "react";
import ManagedITPricing from "@/components/pricing/ManagedITPricing";
import Footer from "@/components/Footer";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const NewPricing = () => {
  useEffect(() => {
    // JavaScript functionality from the original HTML

    const businessTypeRecommendations = {
      manufacturing: {
        tier: "business",
        modules: ["mfg", "quality", "assets"],
        reasoning:
          "Manufacturing businesses need robust production and quality management capabilities.",
        itTier: "business",
      },
      retail: {
        tier: "business",
        modules: ["ecommerce", "pos", "loyalty"],
        reasoning:
          "Retail businesses benefit from integrated sales channels and customer loyalty programs.",
        itTier: "business",
      },
      services: {
        tier: "essential",
        modules: ["project", "subscription"],
        reasoning:
          "Service businesses need project management and recurring billing capabilities.",
        itTier: "essential",
      },
      healthcare: {
        tier: "business",
        modules: ["healthcare", "quality"],
        reasoning:
          "Healthcare requires specialized compliance and quality management features.",
        itTier: "business",
      },
      construction: {
        tier: "business",
        modules: ["project", "assets", "fleet"],
        reasoning:
          "Construction companies need comprehensive project and asset management.",
        itTier: "business",
      },
      hospitality: {
        tier: "business",
        modules: ["hospitality", "pos", "loyalty"],
        reasoning:
          "Hospitality businesses need specialized guest management and POS integration.",
        itTier: "business",
      },
      education: {
        tier: "essential",
        modules: ["education"],
        reasoning:
          "Educational institutions benefit from student and academic management features.",
        itTier: "essential",
      },
      agriculture: {
        tier: "essential",
        modules: ["agriculture"],
        reasoning:
          "Agricultural businesses need specialized crop and livestock management.",
        itTier: "essential",
      },
      non_profit: {
        tier: "essential",
        modules: ["non_profit"],
        reasoning:
          "Non-profits need donor management and grant tracking capabilities.",
        itTier: "essential",
      },
      general: {
        tier: "essential",
        modules: [],
        reasoning: "A solid foundation with core business management features.",
        itTier: "essential",
      },
    };

    const pricingData = {
      erp: {
        essential: {
          baseUpfront: 100000,
          baseMonthly: 35000,
          freeModules: 1,
          moduleUpfront: 20000,
          moduleMonthly: 5000,
          maxEmployees: 15,
        },
        business: {
          baseUpfront: 350000,
          baseMonthly: 128800,
          freeModules: 2,
          moduleUpfront: 50000,
          moduleMonthly: 10000,
          maxEmployees: 30,
        }, // 23 avg employees * 5600 = 128,800
        enterprise: {
          baseUpfront: 800000,
          baseMonthly: 350000,
          freeModules: 0,
          moduleUpfront: 100000,
          moduleMonthly: 25000,
          maxEmployees: 999,
        }, // 35 avg employees * 10,000 = 350,000
      },
      it: {
        essential: { monthly: 32500 }, // Average of 20k-45k
        business: { monthly: 112500 }, // Average of 75k-150k
        enterprise: { monthly: 200000 },
      },
      ai: {
        assistant: { upfront: 150000, monthly: 15000 },
      },
      // Industry average costs for comparison - updated to be more realistic with services
      industryAverage: {
        erp: { perUserMonthly: 12000 },
        it: {
          essential: 8000,
          business: 15000,
          enterprise: 25000,
        },
        ai: { perUserMonthly: 3000 },
        setupCostMultiplier: 2.5,
      },
    };

    const employeeRadios = document.querySelectorAll(
      ".emp-radio"
    ) as NodeListOf<HTMLInputElement>;
    const businessTypeSelect = document.getElementById(
      "businessType"
    ) as HTMLSelectElement;
    const moduleSelectionDiv = document.getElementById(
      "module-selection"
    ) as HTMLDivElement;
    const moduleCounterEl = document.getElementById(
      "module-counter"
    ) as HTMLSpanElement;
    const itServicesSelect = document.getElementById(
      "itServices"
    ) as HTMLSelectElement;
    const itRecommendationEl = document.getElementById(
      "it-recommendation"
    ) as HTMLParagraphElement;
    const itValuePropEl = document.getElementById(
      "it-value-prop"
    ) as HTMLDivElement;
    const itTipTextEl = document.getElementById(
      "it-tip-text"
    ) as HTMLSpanElement;
    const aiAssistantCheckbox = document.getElementById(
      "aiAssistant"
    ) as HTMLInputElement;
    const customSolutionsCheckbox = document.getElementById(
      "customSolutions"
    ) as HTMLInputElement;

    const intelligentRecommendationEl = document.getElementById(
      "intelligent-recommendation"
    ) as HTMLParagraphElement;
    const recommendationReasonEl = document.getElementById(
      "recommendation-reason"
    ) as HTMLParagraphElement;
    const recommendedErpEl = document.getElementById(
      "recommended-erp"
    ) as HTMLParagraphElement;
    const confidenceScoreEl = document.getElementById(
      "confidence-score"
    ) as HTMLParagraphElement;
    const totalUpfrontEl = document.getElementById(
      "totalUpfront"
    ) as HTMLParagraphElement;
    const totalMonthlyEl = document.getElementById(
      "totalMonthly"
    ) as HTMLParagraphElement;
    const monthlySavingsEl = document.getElementById(
      "monthlySavings"
    ) as HTMLParagraphElement;
    const yearlySavingsEl = document.getElementById(
      "yearlySavings"
    ) as HTMLParagraphElement;
    const paybackPeriodEl = document.getElementById(
      "paybackPeriod"
    ) as HTMLParagraphElement;
    const roiPercentageEl = document.getElementById(
      "roiPercentage"
    ) as HTMLParagraphElement;
    const discountDisplay = document.getElementById(
      "discount-display"
    ) as HTMLDivElement;
    const discountTextEl = document.getElementById(
      "discount-text"
    ) as HTMLSpanElement;
    const costBreakdownEl = document.getElementById(
      "cost-breakdown"
    ) as HTMLDivElement;
    const customSolutionNotice = document.getElementById(
      "custom-solution-notice"
    ) as HTMLDivElement;
    const costDisplay = document.getElementById(
      "cost-display"
    ) as HTMLDivElement;
    const primaryCtaEl = document.getElementById(
      "primary-cta"
    ) as HTMLButtonElement;

    function renderModules() {
      const businessTypeSelect = document.getElementById(
        "businessType"
      ) as HTMLSelectElement;
      const businessType = businessTypeSelect.value;
      const recommendations = businessTypeRecommendations[businessType];

      let html = "";
      modules.forEach((module) => {
        const isRecommended = recommendations.modules.includes(module.id);
        const borderClass = isRecommended
          ? "border-purple-500 bg-purple-900/20"
          : "border-gray-700";
        const badgeHtml = isRecommended
          ? '<div class="absolute -top-2 -right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full">★</div>'
          : "";

        html += `
          <div class="relative">
            <input type="checkbox" id="mod-${
              module.id
            }" class="module-checkbox hidden optional-module" ${
          isRecommended ? "checked" : ""
        }>
            <label for="mod-${
              module.id
            }" class="p-3 h-full border-2 ${borderClass} rounded-lg cursor-pointer text-center transition flex flex-col justify-center hover:border-purple-400 relative">
              <span class="font-semibold text-gray-300 text-sm">${
                module.name
              }</span>
              ${
                isRecommended
                  ? '<span class="text-xs text-purple-300 mt-1">Recommended</span>'
                  : ""
              }
              ${badgeHtml}
            </label>
          </div>
        `;
      });
      moduleSelectionDiv.innerHTML = html;
      document
        .querySelectorAll(".optional-module")
        .forEach((cb) => cb.addEventListener("change", calculateAndUpdate));
    }

    function updateIntelligentRecommendations() {
      const businessType = businessTypeSelect.value;
      const employeeTier = (
        document.querySelector(
          'input[name="employeeTier"]:checked'
        ) as HTMLInputElement
      ).value;
      const recommendations = businessTypeRecommendations[businessType];

      // Update AI recommendation display
      intelligentRecommendationEl.textContent = `Perfect! We recommend the ${
        recommendations.tier.charAt(0).toUpperCase() +
        recommendations.tier.slice(1)
      } plan for your ${businessType} business.`;
      recommendationReasonEl.textContent = recommendations.reasoning;

      // Update confidence score
      let confidence = 85; // Base confidence
      if (businessType !== "general") confidence += 10;
      if (recommendations.tier === employeeTier) confidence += 5;
      confidenceScoreEl.textContent = `${confidence}% confidence in this recommendation`;

      // Update IT services recommendation
      itServicesSelect.value = recommendations.itTier;
      updateITRecommendation();

      // Update CTA button text based on business type
      const ctaTexts = {
        manufacturing: "🏭 Transform My Manufacturing Business",
        retail: "🛍️ Boost My Retail Operations",
        services: "💼 Optimize My Service Business",
        healthcare: "🏥 Enhance My Healthcare Practice",
        construction: "🏗️ Streamline My Construction Projects",
        hospitality: "🏨 Elevate My Guest Experience",
        education: "🎓 Modernize My Institution",
        agriculture: "🌾 Digitize My Farm Operations",
        non_profit: "❤️ Empower My Mission",
        general: "🚀 Start My Digital Transformation",
      };
      primaryCtaEl.textContent = ctaTexts[businessType];
    }

    function updateITRecommendation() {
      const businessType = businessTypeSelect.value;
      const itTier = itServicesSelect.value;
      const recommendations = businessTypeRecommendations[businessType];

      if (itTier !== "none") {
        itValuePropEl.classList.remove("hidden");

        const tips = {
          essential:
            "Get basic IT support to keep your business running smoothly.",
          business:
            "Proactive IT management prevents downtime and boosts productivity.",
          enterprise:
            "24/7 monitoring and strategic IT guidance for maximum growth.",
        };

        itTipTextEl.textContent =
          tips[itTier] || "Bundle with ERP for maximum savings!";

        let recText = "";
        if (recommendations.itTier === itTier) {
          recText = "✅ Perfect match for your business type!";
        } else if (
          itTier === "essential" &&
          recommendations.itTier !== "essential"
        ) {
          recText = "⚠️ Consider upgrading for better support coverage.";
        } else if (
          itTier === "enterprise" &&
          recommendations.itTier !== "enterprise"
        ) {
          recText = "🚀 Great choice for comprehensive IT management!";
        }
        itRecommendationEl.textContent = recText;
      } else {
        itValuePropEl.classList.add("hidden");
        itRecommendationEl.textContent =
          "💡 Consider adding IT services for complete peace of mind.";
      }
    }

    function formatCurrency(value) {
      return `LKR ${new Intl.NumberFormat("en-US").format(Math.round(value))}`;
    }

    function predictErpTier() {
      const selectedTier = (
        document.querySelector(
          'input[name="employeeTier"]:checked'
        ) as HTMLInputElement
      ).value;
      const businessType = businessTypeSelect.value;
      const recommendations = businessTypeRecommendations[businessType];

      // Force Enterprise for 31+ employees
      if (selectedTier === "enterprise") {
        return "enterprise";
      }

      // Force Business minimum for 16-30 employees
      if (selectedTier === "business") {
        // If business type recommends enterprise, upgrade to enterprise
        if (recommendations.tier === "enterprise") {
          return "enterprise";
        }
        return "business";
      }

      // For Essential (0-15 employees), use business type recommendation as minimum
      if (recommendations.tier === "enterprise") {
        return "enterprise";
      } else if (recommendations.tier === "business") {
        return "business";
      }
      return "essential";
    }

    function calculateAndUpdate() {
      if (customSolutionsCheckbox.checked) {
        costDisplay.classList.add("hidden");
        customSolutionNotice.classList.remove("hidden");
        return;
      }
      costDisplay.classList.remove("hidden");
      customSolutionNotice.classList.add("hidden");

      const erpTier = predictErpTier();
      const tierData = pricingData.erp[erpTier];
      const breakdown = {};

      breakdown["ERP Base Upfront"] = tierData.baseUpfront;
      breakdown["ERP Base Monthly"] = tierData.baseMonthly;
      recommendedErpEl.textContent = `Recommended ERP Plan: ${
        erpTier.charAt(0).toUpperCase() + erpTier.slice(1)
      }`;

      const selectedModules = Array.from(
        document.querySelectorAll(".optional-module:checked")
      ).length;
      const paidModules = Math.max(0, selectedModules - tierData.freeModules);

      if (selectedModules <= tierData.freeModules) {
        moduleCounterEl.textContent = `${selectedModules} modules included (${
          tierData.freeModules - selectedModules
        } more free)`;
      } else {
        moduleCounterEl.textContent = `${tierData.freeModules} free + ${paidModules} paid modules`;
      }

      if (paidModules > 0) {
        breakdown[`${paidModules} Additional Module(s) Upfront`] =
          paidModules * tierData.moduleUpfront;
        breakdown[`${paidModules} Additional Module(s) Monthly`] =
          paidModules * tierData.moduleMonthly;
      }

      const itTier = itServicesSelect.value;
      let bundleDiscount = 0;
      if (itTier !== "none") {
        const itCost = pricingData.it[itTier].monthly;
        bundleDiscount = itCost * 0.1;
        breakdown["Managed IT Services"] = itCost - bundleDiscount;
        breakdown["Bundle Discount"] = -bundleDiscount;
      }

      if (aiAssistantCheckbox.checked) {
        breakdown["AI Assistant Setup"] = pricingData.ai.assistant.upfront;
        breakdown["AI Assistant Monthly"] = pricingData.ai.assistant.monthly;
      }

      let totalUpfront = 0;
      let totalMonthly = 0;
      let breakdownHTML = "";

      for (const key in breakdown) {
        const value = breakdown[key];
        if (
          key.toLowerCase().includes("upfront") ||
          key.toLowerCase().includes("setup")
        ) {
          totalUpfront += value;
        } else {
          totalMonthly += value;
        }

        if (key === "Bundle Discount" && value < 0) {
          breakdownHTML += `<div class="flex justify-between text-green-400"><p>${key}</p><p class="font-semibold">${formatCurrency(
            value
          )}</p></div>`;
        } else if (key !== "Bundle Discount") {
          breakdownHTML += `<div class="flex justify-between"><p>${key}</p><p class="font-semibold">${formatCurrency(
            value
          )}</p></div>`;
        }
      }

      costBreakdownEl.innerHTML = breakdownHTML;
      totalUpfrontEl.textContent = formatCurrency(totalUpfront);
      totalMonthlyEl.textContent = formatCurrency(totalMonthly);

      // Enhanced Savings Calculation
      calculateSavingsAndROI(
        erpTier,
        totalUpfront,
        totalMonthly,
        bundleDiscount
      );

      // Update discount display
      if (bundleDiscount > 0) {
        discountTextEl.textContent = `Bundle Discount: ${formatCurrency(
          bundleDiscount
        )} saved monthly!`;
        discountDisplay.classList.remove("hidden");
      } else {
        discountDisplay.classList.add("hidden");
      }
    }

    function calculateSavingsAndROI(
      erpTier,
      totalUpfront,
      totalMonthly,
      bundleDiscount
    ) {
      // Calculate employee count for realistic comparison
      let employeeCount = 10;
      if (erpTier === "essential") employeeCount = 10;
      if (erpTier === "business") employeeCount = 23; // Average of 16-30
      if (erpTier === "enterprise") employeeCount = 50;

      // Calculate industry average costs based on selected services
      const industryAvg = pricingData.industryAverage;
      let competitorMonthly = employeeCount * industryAvg.erp.perUserMonthly; // Base ERP cost

      // Add IT services cost to comparison if selected
      const itTier = itServicesSelect.value;
      if (itTier !== "none") {
        competitorMonthly += employeeCount * industryAvg.it[itTier];
      }

      // Add AI assistant cost to comparison if selected
      if (aiAssistantCheckbox.checked) {
        competitorMonthly += employeeCount * industryAvg.ai.perUserMonthly;
      }

      const competitorUpfront = totalUpfront * industryAvg.setupCostMultiplier;

      // Calculate savings (higher when more services are included)
      const monthlySavings = Math.max(0, competitorMonthly - totalMonthly);
      const yearlySavings = monthlySavings * 12;
      const upfrontSavings = Math.max(0, competitorUpfront - totalUpfront);

      // Update savings display
      monthlySavingsEl.textContent = formatCurrency(monthlySavings);
      yearlySavingsEl.textContent = formatCurrency(yearlySavings);

      // Calculate payback period
      if (monthlySavings > 0) {
        const paybackMonths = Math.ceil(totalUpfront / monthlySavings);
        if (paybackMonths <= 12) {
          paybackPeriodEl.textContent = `Investment pays back in ${paybackMonths} months!`;
        } else {
          paybackPeriodEl.textContent = `Investment pays back in ${
            Math.round((paybackMonths / 12) * 10) / 10
          } years`;
        }
      } else {
        paybackPeriodEl.textContent =
          "Immediate operational savings with RavanOS";
      }

      // Calculate 3-year ROI
      const threeYearSavings = yearlySavings * 3;
      const totalInvestment = totalUpfront + totalMonthly * 36; // 3 years operational
      const competitorTotal = competitorUpfront + competitorMonthly * 36;
      const roiPercentage =
        totalInvestment > 0
          ? Math.round(
              ((competitorTotal - totalInvestment) / totalInvestment) * 100
            )
          : 0;

      roiPercentageEl.textContent = `${Math.max(0, roiPercentage)}%`;
    }

    employeeRadios.forEach((radio) =>
      radio.addEventListener("change", () => {
        updateIntelligentRecommendations();
        renderModules();
        calculateAndUpdate();
      })
    );

    businessTypeSelect.addEventListener("change", () => {
      updateIntelligentRecommendations();
      renderModules();
      calculateAndUpdate();
    });

    itServicesSelect.addEventListener("change", () => {
      updateITRecommendation();
      calculateAndUpdate();
    });

    [aiAssistantCheckbox, customSolutionsCheckbox].forEach((el) => {
      el.addEventListener("change", calculateAndUpdate);
    });

    // Initialize the intelligent system
    updateIntelligentRecommendations();
    renderModules();
    calculateAndUpdate();
    const details = collectEstimatorDetails();
    setEstimatorDetails(details);
    console.log("Estimator Details:", details);
  }, []);

  useEffect(() => {}, []);

  interface Module {
    id: string;
    name: string;
    businessTypes: string[];
  }

  interface EstimatorDetails {
    businessType: string;
    employeeTier: string;
    selectedModules: string[];
    itTier: string;
    aiAssistant: boolean;
    customSolutions: boolean;
    totalUpfront: string;
    totalMonthly: string;
    monthlySavings: string;
    yearlySavings: string;
    paybackPeriod: string;
    roiPercentage: string;
  }

  const modules: Module[] = [
    { id: "mfg", name: "Manufacturing", businessTypes: ["manufacturing"] },
    {
      id: "project",
      name: "Project Mgmt.",
      businessTypes: ["construction", "services"],
    },
    {
      id: "quality",
      name: "Quality Mgmt.",
      businessTypes: ["manufacturing", "healthcare"],
    },
    {
      id: "assets",
      name: "Asset Mgmt.",
      businessTypes: ["manufacturing", "construction"],
    },
    {
      id: "fleet",
      name: "Fleet Mgmt.",
      businessTypes: ["construction", "services"],
    },
    {
      id: "hospitality",
      name: "Hospitality",
      businessTypes: ["hospitality"],
    },
    { id: "education", name: "Education", businessTypes: ["education"] },
    { id: "healthcare", name: "Healthcare", businessTypes: ["healthcare"] },
    {
      id: "agriculture",
      name: "Agriculture",
      businessTypes: ["agriculture"],
    },
    { id: "non_profit", name: "Non-Profit", businessTypes: ["non_profit"] },
    {
      id: "loyalty",
      name: "Loyalty Program",
      businessTypes: ["retail", "hospitality"],
    },
    {
      id: "subscription",
      name: "Subscriptions",
      businessTypes: ["services", "retail"],
    },
    { id: "ecommerce", name: "E-commerce", businessTypes: ["retail"] },
    {
      id: "pos",
      name: "Point of Sale",
      businessTypes: ["retail", "hospitality"],
    },
  ];

  const [estimatorDetails, setEstimatorDetails] =
    React.useState<EstimatorDetails | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const menuBtnRef = React.useRef(null);
  const mobileMenuRef = React.useRef(null);

  function collectEstimatorDetails() {
    const businessTypeSelect = document.getElementById(
      "businessType"
    ) as HTMLSelectElement;
    const employeeTier = (
      document.querySelector(
        'input[name="employeeTier"]:checked'
      ) as HTMLInputElement
    )?.value;
    const itServicesSelect = document.getElementById(
      "itServices"
    ) as HTMLSelectElement;
    const aiAssistantCheckbox = document.getElementById(
      "aiAssistant"
    ) as HTMLInputElement;
    const customSolutionsCheckbox = document.getElementById(
      "customSolutions"
    ) as HTMLInputElement;

    const selectedModules = Array.from(
      document.querySelectorAll(".optional-module:checked")
    ).map((cb: HTMLInputElement) => {
      const id = cb.id.replace("mod-", "");
      const module = modules.find((m) => m.id === id);
      return module ? module.name : id;
    });

    return {
      businessType: businessTypeSelect?.value || "",
      employeeTier: employeeTier || "",
      selectedModules,
      itTier: itServicesSelect?.value || "",
      aiAssistant: aiAssistantCheckbox?.checked || false,
      customSolutions: customSolutionsCheckbox?.checked || false,
      totalUpfront: document.getElementById("totalUpfront")?.textContent || "",
      totalMonthly: document.getElementById("totalMonthly")?.textContent || "",
      monthlySavings:
        document.getElementById("monthlySavings")?.textContent || "",
      yearlySavings:
        document.getElementById("yearlySavings")?.textContent || "",
      paybackPeriod:
        document.getElementById("paybackPeriod")?.textContent || "",
      roiPercentage:
        document.getElementById("roiPercentage")?.textContent || "",
    };
  }

  const handleSaveQuote = async () => {
    // Capture calculator as image
    const calculatorElement = document.getElementById("calculator");
    if (!calculatorElement) return;

    try {
      const canvas = await html2canvas(calculatorElement, {
        useCORS: true,
      });

      const imgData = canvas.toDataURL("image/png");
      const doc = new jsPDF("p", "mm", "a4");
      const imgWidth = 190;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 10;

      // Add calculator image
      doc.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight - 30;

      // Add new page if image is too long
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // Add text details
      const detailsY = position + imgHeight + 10;
      doc.setFontSize(12);
      doc.text(`Generated: ${new Date().toLocaleString()}`, 10, detailsY);

      // Save PDF
      doc.save("RavanOS_Quote.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try again.");
    }
  };

  const handleSaveInvoice = () => {
    // Get values from DOM
    const totalUpfront =
      document.getElementById("totalUpfront")?.textContent || "LKR 0";
    const totalMonthly =
      document.getElementById("totalMonthly")?.textContent || "LKR 0";
    const businessType =
      (document.getElementById("businessType") as HTMLSelectElement)?.value ||
      "general";
    const employeeTier =
      (
        document.querySelector(
          'input[name="employeeTier"]:checked'
        ) as HTMLInputElement
      )?.value || "essential";
    const itTier =
      (document.getElementById("itServices") as HTMLSelectElement)?.value ||
      "none";
    const aiAssistant =
      (document.getElementById("aiAssistant") as HTMLInputElement)?.checked ||
      false;
    const customSolutions =
      (document.getElementById("customSolutions") as HTMLInputElement)
        ?.checked || false;
    const monthlySavings =
      document.getElementById("monthlySavings")?.textContent || "LKR 0";
    const yearlySavings =
      document.getElementById("yearlySavings")?.textContent || "LKR 0";
    const paybackPeriod =
      document.getElementById("paybackPeriod")?.textContent || "";
    const roiPercentage =
      document.getElementById("roiPercentage")?.textContent || "0%";

    // Get selected modules
    const moduleCheckboxes = document.querySelectorAll(
      ".optional-module:checked"
    );
    const modules = Array.from(moduleCheckboxes).map((cb: HTMLInputElement) => {
      const label = document.querySelector(
        `label[for="${cb.id}"] .font-semibold`
      );
      return label?.textContent || "Unknown Module";
    });

    // Create PDF
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("RavanOS Invoice", 10, 10);
    doc.setFontSize(12);

    let y = 20;
    doc.text(`Business Type: ${businessType}`, 10, y);
    y += 10;
    doc.text(`Employee Tier: ${employeeTier}`, 10, y);
    y += 10;
    doc.text(`IT Tier: ${itTier}`, 10, y);
    y += 10;
    doc.text(`AI Assistant: ${aiAssistant ? "Yes" : "No"}`, 10, y);
    y += 10;
    doc.text(`Custom Solutions: ${customSolutions ? "Yes" : "No"}`, 10, y);
    y += 10;
    doc.text(`Selected Modules: ${modules.join(", ")}`, 10, y);
    y += 10;
    doc.text(`Total Upfront: ${totalUpfront}`, 10, y);
    y += 10;
    doc.text(`Total Monthly: ${totalMonthly}`, 10, y);
    y += 10;
    doc.text(`Monthly Savings: ${monthlySavings}`, 10, y);
    y += 10;
    doc.text(`Yearly Savings: ${yearlySavings}`, 10, y);
    y += 10;
    doc.text(`Payback Period: ${paybackPeriod}`, 10, y);
    y += 10;
    doc.text(`3-Year ROI: ${roiPercentage}`, 10, y);
    y += 10;
    doc.text(`Generated: ${new Date().toLocaleString()}`, 10, y);

    // Save PDF
    doc.save("RavanOS_Invoice.pdf");
  };

  const handleClickonDigitalTransformation = () => {
    const details = collectEstimatorDetails();
    setEstimatorDetails(details);

    const subject = encodeURIComponent(
      "RavanOS Digital Transformation Inquiry"
    );
    const body = encodeURIComponent(`
RavanOS Digital Transformation Inquiry

BUSINESS INFORMATION:
• Business Type: ${details.businessType}
• Employee Tier: ${details.employeeTier}

SELECTED MODULES:
${details.selectedModules.map((m) => `  • ${m}`).join("\n")}

SERVICES:
• IT Services Tier: ${details.itTier}
• AI Assistant: ${details.aiAssistant ? "Yes" : "No"}
• Custom Solutions: ${details.customSolutions ? "Yes" : "No"}

COST SUMMARY:
• Total Upfront Cost: ${details.totalUpfront}
• Total Monthly Cost: ${details.totalMonthly}
• Monthly Savings: ${details.monthlySavings}
• Yearly Savings: ${details.yearlySavings}
• Payback Period: ${details.paybackPeriod}
• 3-Year ROI: ${details.roiPercentage}

This estimate was generated by the RavanOS Cost Estimator.
    `);

    window.location.href = `mailto:it@ravanaindustries.com?subject=${subject}&body=${body}`;
  };

  const handleGetMyCustomQuote = () => {
    const subject = encodeURIComponent("Get My Custom Quote from RavanOS");
    const body = encodeURIComponent(``);

    window.location.href = `mailto:it@ravanaindustries.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Navbar />
      <div
        className="bg-ravan-black text-gray-200 min-h-screen mt-8"
        style={{ fontFamily: "'Commissioner', sans-serif" }}
      >
        <main className="container mx-auto px-6 py-8 md:py-16">
          <section id="hero" className="text-center mb-16 md:mb-24">
            <div className="inline-block bg-gray-800 border border-gray-700 rounded-full px-4 py-1 text-sm text-gray-300 mb-4">
              Designed in Germany{" "}
              <span className="text-purple-400 mx-2">&#8226;</span> Built in Sri
              Lanka
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight text-white">
              The AI Operating System <br /> for{" "}
              <span className="gradient-text">Your Business</span>
            </h1>
            <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-400">
              A seamless fusion of AI agents and a superior business management
              platform. Transform how your business operates with intelligent
              automation.
            </p>
          </section>

          <section id="erp" className="mb-16 md:mb-24 scroll-mt-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Pillar 1: RavanOS ERP Platform
              </h2>
              <p className="max-w-2xl mx-auto text-gray-400 mt-2 text-sm sm:text-base">
                The powerful, flexible core for your business operations. Our
                pricing is simple: a one-time implementation fee and a
                predictable monthly platform fee.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="plan-card bg-[#111324] rounded-xl shadow-sm border border-gray-800 p-8 flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold text-purple-400">
                  ERP Essential
                </h3>
                <p className="text-gray-400 mb-6 text-sm sm:text-base">
                  Up to 15 Employees
                </p>
                <div className="mb-6">
                  <p className="text-gray-300 font-medium">
                    Upfront Implementation
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-white">
                    Starts at LKR 100k
                  </p>
                  <p className="text-gray-300 font-medium mt-2">
                    Monthly Platform Fee
                  </p>
                  <p className="text-base sm:text-lg font-bold text-purple-400">
                    Starting at LKR 35k/month
                  </p>
                </div>
                <ul className="space-y-3 text-gray-300 mt-auto">
                  <li className="flex items-start text-sm sm:text-base">
                    <span className="text-purple-400 mr-2 mt-1">&#10004;</span>
                    Includes Core Modules
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2 mt-1">&#10004;</span>+
                    1 Additional Module Free
                  </li>
                </ul>
              </div>
              <div className="plan-card bg-[#111324] rounded-xl shadow-lg border-2 border-purple-500 p-8 flex flex-col relative">
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 gradient-bg text-white text-xs font-bold px-3 py-1 rounded-full">
                  POPULAR
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-purple-400">
                  ERP Business
                </h3>
                <p className="text-gray-400 mb-6 text-sm sm:text-base">
                  Up to 30 Employees
                </p>
                <div className="mb-6">
                  <p className="text-gray-300 font-medium">
                    Upfront Implementation
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-white">
                    Starts at LKR 350k
                  </p>
                  <p className="text-gray-300 font-medium mt-2">
                    Monthly Platform Fee
                  </p>
                  <p className="text-base sm:text-lg font-bold text-purple-400">
                    Starting at LKR 129k/month
                  </p>
                </div>
                <ul className="space-y-3 text-gray-300 mt-auto">
                  <li className="flex items-start text-sm sm:text-base">
                    <span className="text-purple-400 mr-2 mt-1">&#10004;</span>
                    Includes Core Modules
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2 mt-1">&#10004;</span>+
                    2 Additional Modules Free
                  </li>
                </ul>
              </div>
              <div className="plan-card bg-[#111324] rounded-xl shadow-sm border border-gray-800 p-8 flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold text-purple-400">
                  ERP Enterprise
                </h3>
                <p className="text-gray-400 mb-6 text-sm sm:text-base">
                  31+ Employees
                </p>
                <div className="mb-6">
                  <p className="text-gray-300 font-medium">
                    Upfront Implementation
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-white">
                    Custom Quote
                  </p>
                  <p className="text-gray-300 font-medium mt-2">
                    Monthly Platform Fee
                  </p>
                  <p className="text-base sm:text-lg font-bold text-purple-400">
                    Custom Pricing
                  </p>
                </div>
                <ul className="space-y-3 text-gray-300 mt-auto">
                  <li className="flex items-start text-sm sm:text-base">
                    <span className="text-purple-400 mr-2 mt-1">&#10004;</span>
                    Fully Tailored Solution
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2 mt-1">&#10004;</span>
                    All modules priced individually
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <ManagedITPricing
            title="Pillar 2: Managed IT Services"
            description="Add comprehensive IT support for total peace of mind. From helpdesk to strategic guidance, we manage your entire IT infrastructure so you can focus on your business."
            tiers={[
              {
                title: "IT Essential",
                subtitle: "Reliable daily support",
                price: "LKR 20k – 45k",
                features: [
                  "Business Hours Remote Helpdesk",
                  "Managed Antivirus & Workstation Backup",
                ],
              },
              {
                title: "IT Business",
                subtitle: "Proactive IT management",
                price: "LKR 75k – 150k",
                features: [
                  "Extended Hours Helpdesk + 2 On-site Visits",
                  "Advanced Endpoint Security",
                ],
                isPopular: true,
              },
              {
                title: "IT Enterprise",
                subtitle: "Strategic, 24/7 IT oversight",
                price: "LKR 200,000+",
                features: [
                  "24/7/365 Helpdesk + 4+ On-site Visits",
                  "vCIO Strategic Guidance",
                ],
              },
            ]}
          />

          <section id="ai" className="mb-16 md:mb-24 scroll-mt-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Pillar 3: AI & Automation Services
              </h2>
              <p className="max-w-2xl mx-auto text-gray-400 mt-2 text-sm sm:text-base">
                Leverage artificial intelligence to unlock next-level efficiency
                and insights. From custom workflows to a natural language
                assistant for your ERP.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="plan-card bg-[#111324] rounded-xl shadow-sm border border-gray-800 p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-teal-400">
                  AI-Powered Automation
                </h3>
                <p className="text-gray-400 mb-4 text-sm sm:text-base">
                  Custom workflows to automate your unique business processes.
                </p>
                <div className="text-left">
                  <p className="font-semibold text-gray-200 text-sm sm:text-base">
                    Automation Consultation & Scoping
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-white mb-2">
                    LKR 75,000{" "}
                    <span className="text-sm font-normal">(One-time)</span>
                  </p>
                  <p className="font-semibold text-gray-200 text-sm sm:text-base">
                    Custom Automation Implementation
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-white">
                    Quoted per project
                  </p>
                </div>
              </div>
              <div className="plan-card bg-[#111324] rounded-xl shadow-sm border border-gray-800 p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-teal-400">
                  RavanOS AI Assistant
                </h3>
                <p className="text-gray-400 mb-4 text-sm sm:text-base">
                  Interact with your ERP using natural language.
                </p>
                <div className="text-left">
                  <p className="font-semibold text-gray-200 text-sm sm:text-base">
                    One-Time Setup Fee
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-white mb-2">
                    LKR 150,000
                  </p>
                  <p className="font-semibold text-gray-200 text-sm sm:text-base">
                    Monthly Maintenance Fee
                  </p>
                  <p className="text-2xl font-bold text-white">LKR 15,000</p>
                </div>
              </div>
            </div>
          </section>

          <section
            id="calculator"
            className="bg-[#111324] rounded-2xl p-6 md:p-10 border-2 border-purple-500 shadow-2xl scroll-mt-20"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Intelligent Cost Estimator
              </h2>
              <p className="max-w-2xl mx-auto text-gray-400 mt-2 text-sm sm:text-base">
                Answer a few questions about your business, and our AI-powered
                system will recommend the perfect solution and show you exactly
                how much you'll save.
              </p>
              <div className="inline-flex items-center mt-4 bg-green-900/30 text-green-300 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm border border-green-500/30">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Intelligent recommendations powered by RavanOS AI
              </div>
            </div>

            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-white border-b border-gray-700 pb-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-purple-500 text-white rounded-full text-sm font-bold mr-3">
                      1
                    </span>
                    Tell Us About Your Business
                  </h3>
                  <div>
                    <label className="font-medium text-gray-300 text-sm sm:text-base">
                      How many employees do you have?
                    </label>
                    <div
                      id="employee-selection"
                      className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2"
                    >
                      <input
                        type="radio"
                        id="emp-tier-1"
                        name="employeeTier"
                        value="essential"
                        className="emp-radio hidden"
                        defaultChecked
                      />
                      <label
                        htmlFor="emp-tier-1"
                        className="p-3 border-2 border-gray-700 rounded-lg cursor-pointer text-center font-semibold transition hover:border-purple-400"
                      >
                        <div className="text-xs sm:text-sm font-bold">0-15</div>
                        <div className="text-xs text-gray-400 whitespace-nowrap">
                          Small Team
                        </div>
                      </label>
                      <input
                        type="radio"
                        id="emp-tier-2"
                        name="employeeTier"
                        value="business"
                        className="emp-radio hidden"
                      />
                      <label
                        htmlFor="emp-tier-2"
                        className="p-3 border-2 border-gray-700 rounded-lg cursor-pointer text-center font-semibold transition hover:border-purple-400"
                      >
                        <div className="text-xs sm:text-sm font-bold">
                          16-30
                        </div>
                        <div className="text-xs text-gray-400 whitespace-nowrap">
                          Growing Business
                        </div>
                      </label>
                      <input
                        type="radio"
                        id="emp-tier-3"
                        name="employeeTier"
                        value="enterprise"
                        className="emp-radio hidden"
                      />
                      <label
                        htmlFor="emp-tier-3"
                        className="p-3 border-2 border-gray-700 rounded-lg cursor-pointer text-center font-semibold transition hover:border-purple-400"
                      >
                        <div className="text-xs sm:text-sm font-bold">31+</div>
                        <div className="text-xs text-gray-400 whitespace-nowrap">
                          Enterprise
                        </div>
                      </label>
                    </div>
                  </div>

                  <div id="business-type-section" className="space-y-3">
                    <label className="font-medium text-gray-300 text-sm sm:text-base">
                      What type of business are you in?
                    </label>
                    <select
                      id="businessType"
                      className="mt-2 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"
                      aria-label="Select your business type"
                    >
                      <option value="general">General Business</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="retail">Retail/E-commerce</option>
                      <option value="services">Professional Services</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="education">Education</option>
                      <option value="hospitality">Hospitality</option>
                      <option value="construction">Construction</option>
                      <option value="agriculture">Agriculture</option>
                      <option value="non_profit">Non-Profit</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-white border-b border-gray-700 pb-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-purple-500 text-white rounded-full text-sm font-bold mr-3">
                      2
                    </span>
                    Smart ERP Recommendations
                  </h3>
                  <div
                    id="smart-recommendations"
                    className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg p-4 border border-purple-500/30"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <p
                          className="font-semibold text-white"
                          id="intelligent-recommendation"
                        >
                          Our AI is analyzing your business...
                        </p>
                        <p
                          className="text-sm text-purple-200 mt-1"
                          id="recommendation-reason"
                        >
                          Based on your company size and industry
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="font-medium text-gray-300">
                      Core Modules (Always Included):
                    </p>
                    <div className="grid grid-cols-2 gap-2 mt-2 text-xs">
                      <div className="flex items-center text-gray-400">
                        <span className="text-purple-400 mr-2">✓</span>
                        Accounting & Finance
                      </div>
                      <div className="flex items-center text-gray-400">
                        <span className="text-purple-400 mr-2">✓</span>Sales &
                        CRM
                      </div>
                      <div className="flex items-center text-gray-400">
                        <span className="text-purple-400 mr-2">✓</span>HR &
                        Payroll
                      </div>
                      <div className="flex items-center text-gray-400">
                        <span className="text-purple-400 mr-2">✓</span>Inventory
                        Management
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center">
                      <label className="font-medium text-gray-300">
                        Recommended Additional Modules
                      </label>
                      <span
                        id="module-counter"
                        className="text-sm font-semibold text-purple-400"
                      ></span>
                    </div>
                    <div
                      id="module-selection"
                      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-2"
                    ></div>
                    <p className="text-xs text-gray-500 mt-2">
                      ✨ Smart suggestions based on your business type
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-white border-b border-gray-700 pb-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-purple-500 text-white rounded-full text-sm font-bold mr-3">
                      3
                    </span>
                    Complete Your Digital Transformation
                  </h3>
                  <div>
                    <label
                      htmlFor="itServices"
                      className="font-medium text-gray-300 text-sm sm:text-base"
                    >
                      Managed IT Services
                    </label>
                    <select
                      id="itServices"
                      className="mt-2 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    >
                      <option value="none">I'll handle IT myself</option>
                      <option value="essential">
                        IT Essential - LKR 20k-45k/month
                      </option>
                      <option value="business">
                        IT Business - LKR 75k-150k/month (Recommended)
                      </option>
                      <option value="enterprise">
                        IT Enterprise - LKR 200k+/month
                      </option>
                    </select>
                    <p
                      id="it-recommendation"
                      className="text-xs text-purple-400 mt-1"
                    ></p>
                    <div
                      id="it-value-prop"
                      className="hidden mt-2 text-xs text-gray-400 bg-blue-900/20 p-2 rounded border-l-2 border-blue-400"
                    >
                      <strong className="text-blue-300">💡 Pro Tip:</strong>{" "}
                      <span id="it-tip-text">
                        Bundle with ERP for maximum savings!
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start">
                      <input
                        id="aiAssistant"
                        type="checkbox"
                        className="h-5 w-5 rounded border-gray-700 bg-gray-800 text-purple-500 focus:ring-purple-500 mt-1"
                      />
                      <div className="ml-3">
                        <label
                          htmlFor="aiAssistant"
                          className="text-gray-300 font-medium text-sm sm:text-base"
                        >
                          Add RavanOS AI Assistant
                        </label>
                        <p className="text-xs text-gray-500 mt-1">
                          Transform your ERP with natural language commands.
                          "Show me last month's sales" → Instant results!
                        </p>
                        <div className="mt-1 text-xs text-teal-400 font-semibold">
                          +LKR 150k setup, +LKR 15k/month
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <input
                        id="customSolutions"
                        type="checkbox"
                        className="h-5 w-5 rounded border-gray-700 bg-gray-800 text-purple-500 focus:ring-purple-500 mt-1"
                      />
                      <div className="ml-3">
                        <label
                          htmlFor="customSolutions"
                          className="text-gray-300 font-medium text-sm sm:text-base"
                        >
                          I have unique requirements
                        </label>
                        <p className="text-xs text-gray-500 mt-1">
                          Custom integrations, complex workflows, or specialized
                          industry needs
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-6 flex flex-col justify-center border border-gray-700 relative">
                <div className="absolute -top-3 left-6 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold animate-pulse">
                  🔥 Limited Time: 15% Launch Discount
                </div>

                <div className="text-center mt-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Your Intelligent Cost Analysis
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">
                    Personalized for your business needs
                  </p>
                </div>

                <div
                  id="recommendation-display"
                  className="my-4 bg-purple-900/30 text-purple-300 rounded-md p-3 text-center border border-purple-500/30"
                >
                  <p
                    id="recommended-erp"
                    className="font-semibold text-sm sm:text-base"
                  ></p>
                  <p
                    id="confidence-score"
                    className="text-xs mt-1 opacity-80 sm:text-sm"
                  ></p>
                </div>

                <div
                  id="custom-solution-notice"
                  className="hidden my-4 bg-yellow-900/50 text-yellow-300 rounded-md p-4 text-center border border-yellow-500/30"
                >
                  <p className="font-bold text-sm sm:text-base">
                    🎯 Custom Solution Required
                  </p>
                  <p className="text-xs sm:text-sm">
                    Your unique needs deserve a tailored approach. Our experts
                    will design the perfect solution for you.
                  </p>
                  <button
                    onClick={handleGetMyCustomQuote}
                    className="mt-3 bg-yellow-600 text-black font-bold px-4 py-2 rounded-md hover:bg-yellow-500 transition w-full"
                  >
                    Get My Custom Quote →
                  </button>
                </div>

                <div id="cost-display">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                    <div className="text-center">
                      <p className="text-gray-400 text-xs sm:text-sm">
                        Total Investment
                      </p>
                      <p
                        id="totalUpfront"
                        className="text-xl sm:text-2xl font-extrabold gradient-text"
                      >
                        LKR 0
                      </p>
                      <p className="text-xs text-gray-500">One-time setup</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-400 text-xs sm:text-sm">
                        Monthly Cost
                      </p>
                      <p
                        id="totalMonthly"
                        className="text-xl sm:text-2xl font-extrabold gradient-text"
                      >
                        LKR 0
                      </p>
                      <p className="text-xs text-gray-500">
                        Recurring operational
                      </p>
                    </div>
                  </div>

                  <div
                    id="savings-highlight"
                    className="bg-gradient-to-r from-green-900/50 to-blue-900/50 rounded-lg p-4 my-4 border border-green-500/30"
                  >
                    <div className="text-center">
                      <p className="text-green-300 font-bold text-xs sm:text-sm">
                        💰 Your Savings with RavanOS
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                        <div>
                          <p
                            id="monthlySavings"
                            className="text-base sm:text-lg font-bold text-green-400"
                          >
                            LKR 0
                          </p>
                          <p className="text-xs text-green-300">
                            Monthly Savings
                          </p>
                        </div>
                        <div>
                          <p
                            id="yearlySavings"
                            className="text-base sm:text-lg font-bold text-green-400"
                          >
                            LKR 0
                          </p>
                          <p className="text-xs text-green-300">
                            Yearly Savings
                          </p>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p
                          id="paybackPeriod"
                          className="text-xs text-green-200"
                        ></p>
                      </div>
                    </div>
                  </div>

                  <div
                    id="roi-display"
                    className="bg-blue-900/30 rounded-lg p-3 my-4 border border-blue-500/30"
                  >
                    <p className="text-blue-300 font-semibold text-xs sm:text-sm text-center">
                      Return on Investment
                    </p>
                    <div className="text-center mt-2">
                      <p
                        id="roiPercentage"
                        className="text-lg sm:text-xl font-bold text-blue-400"
                      >
                        0%
                      </p>
                      <p className="text-xs text-blue-300">3-Year ROI</p>
                    </div>
                  </div>

                  <div
                    id="cost-breakdown"
                    className="text-left text-xs sm:text-sm space-y-1 mt-4 border-t border-gray-700 pt-4 text-gray-400"
                  ></div>

                  <div
                    id="discount-display"
                    className="bg-green-900/50 text-green-300 rounded-md p-3 text-sm font-semibold hidden border border-green-500/30 mt-4"
                  >
                    <div className="flex items-center">
                      <span className="text-lg mr-2">🎉</span>
                      <span
                        id="discount-text"
                        className="text-xs sm:text-sm"
                      ></span>
                    </div>
                  </div>

                  <div className="space-y-3 mt-6">
                    <button
                      onClick={handleClickonDigitalTransformation}
                      id="primary-cta"
                      className="w-full gradient-bg text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg hover:opacity-90 transition shadow-lg transform hover:scale-105 text-sm sm:text-base"
                    >
                      🚀 Start My Digital Transformation
                    </button>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <a
                        href="tel:+94772581181"
                        className="bg-gray-700 text-white text-center py-1 px-2 sm:py-2 sm:px-4 rounded-md hover:bg-gray-600 transition text-xs sm:text-sm inline-block"
                      >
                        📞 Schedule Demo
                      </a>

                      <button
                        className="bg-gray-700 text-white py-1 px-2 sm:py-2 sm:px-4 rounded-md hover:bg-gray-600 transition text-xs sm:text-sm"
                        onClick={handleSaveQuote}
                      >
                        💾 Save Quote
                      </button>
                      {/* <button
                        className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition text-sm"
                        onClick={handleSaveInvoice}
                      >
                        📄 Save Invoice
                      </button> */}
                    </div>
                  </div>

                  <div className="mt-4 text-center text-xs text-gray-500">
                    <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-1 sm:space-y-0 mt-2 text-xs sm:text-sm">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-1"></span>
                        ISO 27001 Certified
                      </span>
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-1"></span>
                        99.9% Uptime SLA
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-gray-500 mt-4 text-center">
                  <span className="block text-center">
                    💡 This intelligent estimate is based on your specific
                    requirements.
                    <br className="hidden sm:block" />
                    Final pricing confirmed after consultation.
                  </span>
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <style>{`
        .gradient-text {
          background: linear-gradient(to right, #A855F7, #3B82F6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .gradient-bg {
          background: linear-gradient(to right, #A855F7, #3B82F6);
        }
        .plan-card {
          transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        }
        .plan-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px -3px rgb(168 85 247 / 0.1), 0 4px 6px -4px rgb(59 130 246 / 0.1);
        }
        .module-checkbox:checked + label,
        .emp-radio:checked + label {
          border-color: #A855F7;
          background-color: #271c3c;
        }
        .module-checkbox:checked + label span,
        .emp-radio:checked + label {
          color: #c084fc;
        }
        .module-checkbox:disabled + label {
          cursor: not-allowed;
          opacity: 0.6;
        }
      `}</style>
      </div>
    </>
  );
};

export default NewPricing;
